import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

// api
import { logout } from 'api/authentication';

// context
import { useAuth } from 'context/user';

// types
import { NextPage } from 'next';

const LogoutPage: NextPage = () => {
  const { clearSession, me } = useAuth();

  useEffect(() => {
    const logoutUser = async () => {
      if (me) {
        try {
          await logout({ email: me.email });
          Sentry.configureScope((scope) => scope.setUser(null));
        } catch (err) {
          // err
        }
      }

      clearSession();
    };

    logoutUser();
  }, [clearSession, me]);

  return <></>;
};

export default LogoutPage;
