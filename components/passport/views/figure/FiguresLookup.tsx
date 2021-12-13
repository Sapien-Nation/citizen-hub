import { RefreshIcon } from '@heroicons/react/solid';
import useSWR, { useSWRConfig } from 'swr';
import { debounce, uniqBy } from 'lodash';
import { useMemo, useRef, useState } from 'react';
import { useKeyPressEvent } from 'react-use';

// types
import type { Figure } from 'types/figure';

enum KEY_CODES {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  ENTER = 'Enter',
}

interface Props {
  onFigureSelect: (figure: Figure) => void;
}

const FiguresLookup = ({ onFigureSelect }: Props) => {
  const [cursor, setCurrentCursor] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const { cache } = useSWRConfig();

  const apiKey = searchTerm
    ? `/api/v3/passport/figure-lookup?term=${searchTerm}`
    : '';
  const { data, error, isValidating } = useSWR<Array<Figure>>(apiKey);
  const isLoading = (searchTerm && !error && !data) || isValidating;
  let suggestions: Array<Figure> = [];

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
        onFigureSelect(selectedFigure);
        inputRef.current.value = selectedFigure?.name || searchTerm;
      }
    } else {
      onFigureSelect({
        id: searchTerm,
        isTaken: false,
        name: searchTerm,
        passportId: null,
      });
      inputRef.current.value = selectedFigure?.name || searchTerm;
    }
  });

  const onSuggestionHover = (cursor: number) => setCurrentCursor(cursor);

  const onSuggestionClick = (figure: Figure) => {
    if (figure.isTaken === false) {
      setShowSuggestions(false);
      onFigureSelect(figure);

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

  return (
    <div className="flex justify-center items-center">
      <div className="relative mt-6 max-w-sm w-full">
        <input
          ref={inputRef}
          id="search"
          name="search"
          autoComplete="off"
          className="block w-full h-12 px-5 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          placeholder="Name"
          type="text"
          onChange={handleFigureSearch}
          onBlur={() => {
            clearSuggestions();
            setCurrentCursor(null);
          }}
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            <RefreshIcon className="animate-spin h-5 w-5 mr-3" />
          </div>
        )}

        {suggestions.length > 0 && showSuggestions && (
          <ul
            tabIndex={-1}
            className="bg-white rounded-lg w-full mt-1 z-10 absolute py-1 border-b border-gray-200"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                className={`w-full flex justify-between rounder-md text-left py-2 px-5 cursor-pointer ${
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
      </div>
    </div>
  );
};

export default FiguresLookup;
