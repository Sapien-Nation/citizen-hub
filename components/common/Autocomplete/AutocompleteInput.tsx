// Tailwind
import { RefreshIcon } from '@heroicons/react/solid';

interface Props {
  isFetching?: boolean;
  setFigureTerm: (value: string) => void;
}

const AutocompleteInput = ({
  isFetching = false,
  setFigureTerm,
  ...rest
}: Props) => {
  return (
    <>
      <input
        id="search"
        name="search"
        autoComplete="off"
        className="block w-full h-12 px-3 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        placeholder="Name"
        type="search"
        onChange={(event) => {
          setFigureTerm((event as any).target.value);
        }}
        {...rest}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
        {isFetching && <RefreshIcon className="animate-spin h-5 w-5 mr-3" />}
      </div>
    </>
  );
};

export default AutocompleteInput;
