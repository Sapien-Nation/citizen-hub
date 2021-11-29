import React from 'react';

interface Props {
  cursor: number;
  suggestions: Array<string>;
  onSuggestionClick: (value: string) => void;
  onSuggestionHover: (index: number) => void;
}

const SuggestionsList = ({
  cursor,
  suggestions,
  onSuggestionClick,
  onSuggestionHover,
}: Props) => (
  <ul
    tabIndex={-1}
    className="bg-white absolute px-4 py-5 border-b border-gray-200 sm:px-6"
  >
    {suggestions.map((suggestion, i) => (
      <li
        key={i}
        className={`${cursor === i ? 'bg-gray-50' : null}`}
        onMouseDown={() => onSuggestionClick(suggestion)}
        onMouseEnter={() => onSuggestionHover(i)}
      >
        <span>{suggestion}</span>
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
