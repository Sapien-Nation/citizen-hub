import { RefreshIcon, CheckCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

// api
import { createStyledAvatar, replaceFigure } from 'api/passport';

// components
import { FeedbackView } from 'components/passport';

// context
import { useToast } from 'context/toast';
import { useRouter } from 'next/router';

// utils
import { mergeClassNames } from 'utils/styles';

interface Props {
  name: string;
  onSelect: (file: Blob) => void;
  setIsFetching: (isFetching: boolean) => void;
  setIsManual: (isManual: boolean) => void;
}

interface ManualFile {
  file: File;
  preview: string;
}

const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

const ImageGallery = ({
  name,
  onSelect,
  setIsFetching,
  setIsManual,
}: Props) => {
  const [manualFiles, setManualFiles] = useState<Array<ManualFile>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [refreshedImages, setRefreshedImages] = useState<Array<string>>([]);

  const toast = useToast();
  const fileRef = useRef();
  const { mutate } = useSWRConfig();

  const apiKey = `/passport-api/image/gallery?term=${name}`;
  const { data, error } =
    useSWR<{ images: Array<{ site: string; link: string }> }>(apiKey);
  const loadingData = error === undefined && !data;
  const isError = error !== undefined;

  const generateImageFile = async (image: string) => {
    try {
      const response = await axios.get(image, { responseType: 'arraybuffer' });
      return b64toBlob(
        Buffer.from(response.data).toString('base64'),
        response.headers['content-type']
      );
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleImageSelect = async (image: string, handleFetch = true) => {
    if (handleFetch) {
      setIsFetching(true);
    }
    try {
      const imageFile = await generateImageFile(image);

      onSelect(imageFile);
      setSelectedImage(image);
      setIsManual(false);
    } catch (error) {
      toast({
        message:
          'There was an Error selecting this image, please select another one',
      });
      setSelectedImage(null);
      onSelect(null);
    }
    if (handleFetch) {
      setIsFetching(false);
    }
  };

  const handleRefresh = async (url: string) => {
    setIsRefreshing(true);
    try {
      const newRefreshedImages = [...refreshedImages, url];
      const newFigure = await replaceFigure({
        term: name,
        // @ts-ignore
        ignoreUrls: [...newRefreshedImages, ...data!.images],
      });

      await handleImageSelect(newFigure, false);

      setRefreshedImages(newRefreshedImages);
      mutate(
        apiKey,
        (data: { images: Array<string> }) => ({
          ...data,
          images: data.images.map((image: string) =>
            image === url ? newFigure : image
          ),
        }),
        false
      );
    } catch (err) {
      if (err?.code === 204) {
        setRefreshedImages([]);
      }
      toast({
        message: error?.message ?? 'No more relevant images found',
      });
    }
    setIsRefreshing(false);
  };

  useEffect(
    () => setIsFetching(loadingData || isRefreshing),
    [isRefreshing, loadingData, setIsFetching]
  );

  if (error) {
    if (error === 'Historic Figure is not valid') {
      return <FeedbackView code={408} />;
    }

    return <FeedbackView code={407} />;
  }

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8"
      >
        {data?.images.map(
          ({ site, link }: { site: string; link: string }, index) => (
            <li key={index} className="relative transition ease-in-out">
              {isRefreshing && link === selectedImage ? (
                <div className="flex justify-center items-center animate-pulse group w-full h-56 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <RefreshIcon className="animate-spin h-5 w-5 text-gray-700" />
                </div>
              ) : (
                <div
                  className={mergeClassNames(
                    link === selectedImage ? 'ring-2 ring-indigo-500' : '',
                    'group flex cursor-pointer justify-center items-center w-full aspect-w-10 h-56 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden after:absolute hover:after:sm:bg-black hover:after:sm:bg-opacity-30 hover:after:w-full hover:after:h-full hover:after:top-0'
                  )}
                  onClick={async () => {
                    await handleImageSelect(link);
                  }}
                >
                  {link === selectedImage && (
                    <CheckCircleIcon className="h-5 w-5 text-purple-900 absolute right-2 top-2 left-auto z-10 drop-shadow-lg" />
                  )}

                  <button
                    className="text-white z-10 w-12 text-center h-12 absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 hidden flex-row justify-center items-center bg-black bg-opacity-30 rounded-md group-hover:flex"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImage(link);
                      handleRefresh(link);
                    }}
                  >
                    <RefreshIcon className="h-5 w-5 text-white" />
                  </button>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    id={`image-${link}`}
                    src={link}
                    alt={site}
                    className="object-cover h-full w-full pointer-events-none group-hover:sm:opacity-75"
                    onError={(event) => {
                      (event.target as HTMLImageElement).src =
                        'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                    }}
                  />
                </div>
              )}
            </li>
          )
        )}
        {loadingData && (
          <>
            <li className="animate-pulse relative">
              <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
            </li>
            <li className="animate-pulse relative">
              <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
            </li>
            <li className="animate-pulse relative">
              <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
            </li>
            <li className="animate-pulse relative">
              <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
            </li>
          </>
        )}
        {manualFiles.map(({ file, preview }, index) => (
          <li
            key={index}
            className="relative transition ease-in-out hover:scale-105"
          >
            <div
              className={mergeClassNames(
                selectedImage === preview ? 'ring-2 ring-indigo-500' : '',
                'group flex cursor-pointer justify-center items-center w-full aspect-w-10 h-56 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
              )}
              onClick={() => {
                onSelect(file);
                setSelectedImage(preview);
                setIsManual(true);
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt={`Search Image result for search term ${name}`}
                className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                onError={(event) => {
                  (event.target as HTMLImageElement).src =
                    'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                }}
              />
            </div>
          </li>
        ))}
        <li
          className="relative transition ease-in-out"
          onClick={() => {
            // @ts-ignore
            fileRef.current.click();
          }}
        >
          <div className="group flex cursor-pointer justify-center items-center w-full h-56 rounded-lg bg-gray-100 overflow-hidden border-4 border-dashed border-gray-200">
            <div className="text-center">
              <svg
                className="animate-bounce mx-auto h-8 w-8 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mt-2 leading-normal text-sm text-gray-700">
                Upload <span className="text-sapien-60">{name}</span> image
                manually
              </span>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG, GIF up to 10MB
              </p>
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={async (event) => {
                  if (event.target.files.length === 0) return;
                  const file = event.target.files[0];
                  const preview = URL.createObjectURL(file);
                  try {
                    setManualFiles([
                      ...manualFiles,
                      {
                        preview,
                        file,
                      },
                    ]);
                    onSelect(file);
                    setSelectedImage(preview);
                    setIsManual(true);
                  } catch (err) {
                    toast({
                      message: err?.message ?? 'No more relevant images found',
                    });
                  }
                }}
              />
            </div>
          </div>
        </li>
      </ul>
      {isError && (
        <h1 className="text-xl font-extrabold tracking-tight mt-8">
          <span className="block text-white">
            Seems like there was en error with our image provider, but you can
            still upload the image manually
          </span>
        </h1>
      )}
    </>
  );
};

const GalleryView = () => {
  const { query } = useRouter();
  const [isManual, setIsManual] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [passportFile, setPassportFile] = useState<Blob | null>(null);
  const { figureName } = query;
  const toast = useToast();

  const handleContinue = async () => {
    try {
      const formData = new FormData();
      formData.append('IMAGE', passportFile);
      const [{ fileName, imageData, mimeType }] = await createStyledAvatar(
        formData
      );

      const res = await fetch(imageData);
      const blob = await res.blob();
      const file = new File([blob], fileName, { type: mimeType });
    } catch (error) {
      toast({
        message:
          error ?? 'Error Creating Passport, please try with a different image',
      });
    }
    setIsFetching(false);
  };

  return (
    <>
      <div className="transition delay-150 duration-300 ease-in-out px-4 xl:px-0"></div>
      <div className="transition delay-150 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">
            Now let&apos;s choose a portrait for {figureName}
          </span>
        </h1>
        <h2 className="text-lg mt-5 text-white mb-5">
          Remember that if you upload your own photo, it must be copyright free
          or open source.
        </h2>
        <main className="lg:relative">
          <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
            {figureName && (
              <ImageGallery
                name={figureName as string}
                onSelect={(file) => setPassportFile(file)}
                setIsFetching={setIsFetching}
                setIsManual={setIsManual}
              />
            )}
            <div className="mt-20 sticky -bottom-10 flex flex-col justify-center items-center">
              {Boolean(passportFile) && (
                <button
                  disabled={isFetching}
                  type="button"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                    isFetching ? 'animate-pulse' : ''
                  }`}
                  onClick={handleContinue}
                >
                  Generate Avatar
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GalleryView;
