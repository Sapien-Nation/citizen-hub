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
      try {
        await logout({ email: me.email });
      } catch (err) {
        // err
      }

      clearSession();
    };

    if (me) {
      logoutUser();
    }
  }, [clearSession, me]);

  return <></>;
};

export default LogoutPage;
