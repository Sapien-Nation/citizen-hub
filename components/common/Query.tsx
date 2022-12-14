import useSWR, { mutate } from 'swr';

// components
import { ErrorFallback } from './views';
import Spinner from './Spinner';

// types
import type { SWRConfiguration, Key } from 'swr';
import Redirect from './Redirect';

interface Props {
  api: Key;
  children?: Function | null;
  empty?: React.ReactNode;
  ignoreError?: boolean;
  loader?: React.ReactNode;
  showValidating?: boolean;
  options?: SWRConfiguration;
}

export type Error = {
  message: string;
};

const Query = ({
  api,
  children,
  empty,
  loader = <Spinner />,
  ignoreError = false,
  showValidating = false,
  options,
}: Props) => {
  const { data, error, isValidating } = useSWR(api, options);

  if (api !== null) {
    if ((!data && !error) || (showValidating && isValidating)) {
      return loader;
    }
    if (!error && data.length === 0 && Boolean(empty)) {
      return empty;
    }
  }
  if (error) {
    if (error === 'Your session expired') {
      return <Redirect path="/logout" />;
    }

    if (ignoreError === true) return <></>;

    return (
      <ErrorFallback
        error={error as Error}
        resetErrorBoundary={() => mutate(api)}
      />
    );
  }

  return children ? (children as Function)(data) : null;
};

export default Query;
