import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import useSWR, { useSWRConfig } from 'swr';
import * as Sentry from '@sentry/nextjs';

// types
import { User } from 'tools/types/user';

// api
import { authFetcher as fetcher } from 'api/fetchers';

export interface Authentication {
  me: User | null;
  clearSession: () => void;
  isLoggingIn: boolean;
  setSession: (
    tokens: {
      token: string;
      torus: string;
      refresh: string;
    },
    redirect?: string | null
  ) => void;
}

export const AuthenticationContext = createContext<Authentication>(null);

interface Props {
  children: React.ReactNode;
}

const AuthenticationProvider = ({ children }: Props) => {
  const [, setTokens, removeTokens] = useLocalStorage<null | {
    token: string;
    torus: string;
    refresh: string;
  }>('tokens', null);

  const { push } = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: authMutate } = useSWR<User>('/user-api/me', {
    fetcher,
  });

  const isLoggingIn = data === undefined;
  console.log(data);
  useEffect(() => {
    if (data) {
      Sentry.setUser({
        email: data.email,
        id: data.id,
        username: data.username,
      });
    }
  }, [data]);
  const clearSession = () => {
    removeTokens();
    mutate('/user-api/me', null, false);
    push('/');
  };

  const setSession = async (
    {
      token,
      torus,
      refresh,
    }: {
      token: string;
      torus: string;
      refresh: string;
    },
    redirect = null
  ) => {
    setTokens({ token, torus, refresh });
    await authMutate();

    if (redirect && process.browser) {
      window.location.replace(`${window.location.origin}${redirect}`);
    } else {
      push('/');
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        clearSession,
        me: data,
        isLoggingIn,
        setSession,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthenticationContext);

  if (context === undefined) {
    throw new Error('useMe must be used within a AuthenticationProvider');
  }
  return context;
}

export { AuthenticationProvider, useAuth };
