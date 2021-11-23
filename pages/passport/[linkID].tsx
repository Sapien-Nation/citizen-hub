import { useRouter } from 'next/router';

// components
import { Query, Redirect } from 'components/common';

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
      switch (statusCode) {
        case 409:
          return 'TODO There is already a Passport linked to this account';
        case 403:
          return 'TODO No more passports available for this link, please try a new one';
        case 404:
          return 'TODO Not Valid';
      }
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
