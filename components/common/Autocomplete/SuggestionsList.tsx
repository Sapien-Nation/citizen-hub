import React from 'react';

interface Props {
  cursor: number;
  suggestions: Array<{ name: string; id: string }>;
  onSuggestionClick: (figure: { name: string; id: string }) => void;
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
    {suggestions.map((figure, i) => (
      <li
        key={i}
        className={`${cursor === i ? 'bg-gray-50' : null}`}
        onMouseDown={() => onSuggestionClick(figure)}
        onMouseEnter={() => onSuggestionHover(i)}
      >
        <span>{figure.name}</span>
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
