import { XIcon } from '@heroicons/react/outline';

interface Props {
  file: File;
  setView: () => void;
  setFile: (file: File) => void;
}

const FigureImageUpload = ({ file, setView, setFile }: Props) => {
  return (
    <>
      <label
        className="
          flex
          flex-col
          items-center
          bg-white
          shadow-md
          cursor-pointer
          ease-linear
          transition-all
          duration-150
          w-full
          border-2
          border-gray-300
          border-dashed
          rounded-lg
          p-12
          text-center
          hover:border-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        {file !== null ? (
          <span className="relative">
            <button
              type="button"
              className="absolute z-10 -top-1 -right-1 inline-flex items-center p-1 bg-gray-900 rounded-full shadow-sm text-white focus:outline-none"
              onClick={() => setFile(null)}
            >
              <XIcon className="h-3 w-3 text-white" aria-hidden="true" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="cover"
              className="w-100 relative rounded-md"
              src={URL.createObjectURL(file)}
            />
          </span>
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <span className="mt-2 text-base leading-normal">
              Upload Figure Manually
            </span>
            <p className="text-xs text-gray-500 mt-2">
              PNG, JPG, GIF up to 10MB
            </p>
            <input
              type="file"
              className="hidden"
              onChange={(event) => setFile(event.target.files[0])}
            />
          </>
        )}
      </label>
      <button type="button" className="mt-8 text-center" onClick={setView}>
        <p className="mt-1 text-sm text-gray-500">Back to Gallery View</p>
      </button>
    </>
  );
};

export default FigureImageUpload;
