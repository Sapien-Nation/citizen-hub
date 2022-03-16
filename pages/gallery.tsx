import { useState } from 'react';

// api
import { createStyledAvatar } from 'api/passport';

// components
import ImageGallery from 'components/passport/ImageGallery';

// context
import { useToast } from 'context/toast';
import { useRouter } from 'next/router';

interface Avatar {
  image: File;
  isManual: boolean;
}

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
