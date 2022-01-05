export interface Props {
  error: string;
  extraLabel?: React.ReactElement;
  name: string;
  label: string;
}

const TextInputLabel = ({ error, extraLabel = null, name, label }: Props) => {
  return (
    <label
      htmlFor={name}
      className={`text-sm mt-4 block text-sm ${
        error ? 'text-red-500' : 'text-gray-700'
      }`}
      id={error ? `${name}-error` : ''}
    >
      <span className={`${error ? 'font-extrabold' : 'font-medium'}`}>
        {label}
      </span>{' '}
      {error}
      {extraLabel}
    </label>
  );
};

export default TextInputLabel;
