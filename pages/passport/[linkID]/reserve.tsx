import { useRouter } from 'next/router';

// components
import { Redirect } from 'components/common';

const RedirectProxy = () => {
  const { query } = useRouter();

  if (!query.linkID) return null;

  return <Redirect path={`/passport/${query.linkID}`} />;
};

export default RedirectProxy;
