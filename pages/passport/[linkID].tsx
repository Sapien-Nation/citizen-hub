import { useRouter } from 'next/router';

// components
import { Query, Redirect } from 'components/common';
import { ErrorView } from 'components/passport';

// context
import { useAuth } from 'context/user';

interface Props {
  allowedPassports: number;
  availablePassports: number;
  linkID: string;
}

const Passport = ({ linkID }: Props) => {
  return <h1>{linkID} Ready</h1>;
};

interface CheckResponse {
  allowedPassports?: number;
  availablePassports?: number;
  distributionId?: string;
  statusCode?: number;
  message?: string;
}

const PassportPage = () => {
  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true) return null;

  if (me === null) return <Redirect path="/" />;

  if (!query.linkID) return null;

  const renderView = ({
    allowedPassports,
    availablePassports,
    statusCode,
  }: CheckResponse) => {
    if (statusCode) {
      return <ErrorView code={statusCode} />;
    }

    return (
      <Passport
        allowedPassports={allowedPassports}
        availablePassports={availablePassports}
        linkID={String(query.linkID)}
      />
    );
  };

  return (
    <Query api={`/api/v3/passport/check-link?linkId=${query.linkID}`}>
      {(response: CheckResponse) => <>{renderView(response)}</>}
    </Query>
  );
};

export default PassportPage;
