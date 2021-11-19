import { useRouter } from 'next/router';

// types
import type { NextPage } from 'next';

const PassportView = () => <></>;

const useAuth = () => ({ me: null });

const PassportPage: NextPage = () => {
  const { me } = useAuth();
  const { query, push } = useRouter();

  if (!query.linkID) return <></>;

  if (me === null) return <></>;

  return <PassportView />;
};

export default PassportPage;
