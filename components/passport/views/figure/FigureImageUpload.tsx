import { PhotographIcon } from '@heroicons/react/outline';

interface Props {
  setView: () => void;
  setFile: (file: File) => void;
}

const FigureImageUpload = ({ setView, setFile }: Props) => {
  return (
    <>
      <button
        type="button"
        className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PhotographIcon
          className="block text-sm h-6 w-6 text-black"
          aria-hidden="true"
        />

        <span className="mt-2 block text-sm font-medium text-gray-900">
          Upload Figure Manually
        </span>
        <input
          id="user_avatar"
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
      </button>
      <button
        type="button"
        className="w-full p-12 text-center"
        onClick={setView}
      >
        <p className="mt-1 text-sm text-gray-500">Back to Gallery View</p>
      </button>
    </>
  );
};

export default FigureImageUpload;
