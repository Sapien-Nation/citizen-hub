import { useFormContext } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { useTheme } from 'next-themes';

// utils
import { mergeClassNames } from 'utils/styles';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;
interface Props extends InputProps {
  name: string;
  pattern?: RegExp;
  maxLength?: number;
  replaceWhiteSpace?: boolean;
  rules?: any;
}

const TextInput = ({
  className,
  name,
  pattern,
  maxLength = 100,
  replaceWhiteSpace = false,
  rules = {},
  inputMode,
  ...rest
}: Props) => {
  const { register } = useFormContext();
  const { theme } = useTheme();

  return (
    <input
      onKeyPress={(event) => {
        if (pattern) {
          if (!pattern.test(event.key)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          }
        }

        if (replaceWhiteSpace === true) {
          if (event.key === ' ') {
            event.preventDefault();
            event.stopPropagation();
            return false;
          }
        }

        return true;
      }}
      {...rest}
      {...register(name, {
        ...rules,
        onChange: (event) => {
          event.preventDefault();
          let value = event.target.value;

          if (value.length > maxLength) {
            value = value.slice(0, maxLength);
          }

          if (inputMode === 'numeric' && Number(value) > maxLength) {
            value = maxLength;
          }

          event.target.value = value;
        },
      })}
      className={mergeClassNames(
        theme && theme === 'dark' ? 'bg-gray-800' : '',
        className
      )}
    />
  );
};

export default TextInput;
