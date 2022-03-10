import useSWR, { useSWRConfig } from 'swr';
import { debounce, uniqBy } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useKeyPressEvent } from 'react-use';

// api
import { reserveFigure } from 'api/passport/reserve';

// context
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';
import { View as PassportViews } from 'pages/passport/[linkID]';

enum KEY_CODES {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  ENTER = 'Enter',
}

interface Props {
  distributionId: string;
  setView: (view: PassportViews) => void;
  setFigureName: (figureName: string) => void;
}

const Lookup = ({ distributionId, setView, setFigureName }: Props) => {
  const [cursor, setCurrentCursor] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [historicalFigure, setHistoricalFigure] = useState('');

  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const { cache } = useSWRConfig();

  const apiKey = searchTerm
    ? `/api/v3/passport/figure-lookup?term=${searchTerm}`
    : '';
  const { data, error, isValidating } = useSWR<Array<Figure>>(apiKey);
  const isLoading = (searchTerm && !error && !data) || isValidating;
  let suggestions: Array<Figure> = [];

  useEffect(() => {
    if (searchTerm === '') {
      setHistoricalFigure('');
      inputRef.current.value = '';
    }
  }, [searchTerm, isLoading]);

  //---------------------------------------------------------------------------------------------
  const clearSuggestions = () => cache.set(apiKey, () => []);

  useKeyPressEvent(KEY_CODES.UP, () => {
    if (cursor > 0) {
      setCurrentCursor(cursor - 1);
    } else if (cursor === 0 || cursor === null) {
      setCurrentCursor(suggestions.length - 1);
    } else {
      setCurrentCursor(cursor - 1);
    }
  });

  useKeyPressEvent(KEY_CODES.DOWN, () => {
    if (cursor === null) {
      setCurrentCursor(0);
    } else if (cursor >= suggestions.length - 1) {
      setCurrentCursor(0);
    } else {
      setCurrentCursor(cursor + 1);
    }
  });

  useKeyPressEvent(KEY_CODES.ENTER, () => {
    const selectedFigure = suggestions[cursor];
    clearSuggestions();
    setShowSuggestions(false);

    if (selectedFigure) {
      if (selectedFigure.isTaken === false) {
        setHistoricalFigure(selectedFigure.name);
        inputRef.current.value = selectedFigure?.name || searchTerm;
      }
    } else {
      setHistoricalFigure(searchTerm);
      inputRef.current.value = selectedFigure?.name || searchTerm;
    }
  });

  const onSuggestionHover = (cursor: number) => setCurrentCursor(cursor);

  const handleFigureConfirm = async () => {
    setIsFetching(true);
    try {
      const { isPending } = await reserveFigure({
        distributionId,
        figureName: historicalFigure,
      });

      if (isPending) {
        setView(PassportViews.Pending);
      } else {
        setFigureName(historicalFigure);
        setView(PassportViews.Gallery);
      }
    } catch (error) {
      toast({
        message:
          error ||
          'Something Went wrong please contact passport@sapien.network',
      });
    }
    setIsFetching(false);
  };

  const onSuggestionClick = (figure: Figure) => {
    if (figure.isTaken === false) {
      setShowSuggestions(false);
      setHistoricalFigure(figure.name);

      inputRef.current.value = figure?.name;
    }
  };

  //---------------------------------------------------------------------------------------------
  const handleFigureSearch = useMemo(
    () =>
      debounce((event) => {
        setSearchTerm(event.target.value);
        setShowSuggestions(true);
      }, 300),
    []
  );

  if (searchTerm) {
    suggestions = [
      {
        id: searchTerm,
        name: searchTerm,
        passportId: null,
        isTaken: false, // TODO backend to fix this field
      },
    ];
  }

  if (data?.length > 0) {
    suggestions = uniqBy([...suggestions, ...data], ({ name }) => name);
  }

  return (
    <div className="transition delay-150 duration-300 ease-in-out">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-white">Welcome to the Sapien Nation.</span>
      </h1>
      <h2 className="text-lg mt-5 text-gray-500 mb-5">
        First step to access the digital nation will be to choose an historical
        figure.
      </h2>
      <div className="flex justify-center items-center">
        <div className="relative mt-6 max-w-sm w-full">
          <input
            ref={inputRef}
            id="search"
            name="search"
            autoComplete="off"
            className="block text-gray-900 w-full h-12 px-5 py-2 border border-gray-600 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Name"
            type="text"
            onChange={handleFigureSearch}
            onBlur={() => {
              clearSuggestions();
              setCurrentCursor(null);
            }}
            onKeyDown={(event) => {
              if (event.key === KEY_CODES.UP && showSuggestions) {
                event.preventDefault();
              }
            }}
          />
          {suggestions.length > 0 && showSuggestions && (
            <ul
              tabIndex={-1}
              className="bg-white rounded-lg w-full mt-1 z-10 absolute py-1 border-b border-gray-200"
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion.id}
                  className={`w-full flex justify-between rounder-md text-left py-2 px-5 cursor-pointer text-gray-900 ${
                    cursor === index ? 'bg-gray-100' : null
                  } ${suggestion.isTaken ? 'cursor-not-allowed' : ''}`}
                  onMouseDown={() => onSuggestionClick(suggestion)}
                  onMouseEnter={() => onSuggestionHover(index)}
                >
                  <span>{suggestion.name}</span>
                  {suggestion.isTaken ? (
                    <span className="text-xs text-gray-400">Not Available</span>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
          {historicalFigure && (
            <div className="mt-20 sticky bottom-10 flex flex-col justify-center items-center">
              <button
                disabled={isFetching}
                type="button"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isFetching ? 'animate-pulse' : ''
                }`}
                onClick={handleFigureConfirm}
              >
                Confirm {historicalFigure}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lookup;
