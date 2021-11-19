import { useRouter } from 'next/router';

// components
import { Query } from 'components/common';

// types
import type { NextPage } from 'next';

interface Props {
  linkID: string;
}

const PassportView = ({ linkID }: Props) => {
  return <>{linkID}</>;
};

const PassportPage: NextPage = () => {
  const { query, isReady } = useRouter();

  if (isReady === false) return <></>;

  const { linkID } = query;

  // TODO this route should be protected
  return (
    <Query api={`/api/v3/passport/check-link?linkId=${linkID}`}>
      {() => <PassportView linkID={String(linkID)} />}
    </Query>
  );
};

export default PassportPage;
