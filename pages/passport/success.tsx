import { useRouter } from 'next/router';

// context
import { useAuth } from 'context/user';

// components
import { Head, Query } from 'components/common';
import { AuthView, SuccessView } from 'components/passport';

const Success = () => {
  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true) return null;

  if (me === null)
    return (
      <div className="flex flex-col justify-center flex-1">
        <AuthView redirect="/passport/success" />
      </div>
    );

  return (
    <>
      <Head title="Congratulations!" />

      <div className="flex-1 flex flex-row items-center justify-center">
        <main className="lg:relative h-full w-full">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center h-full lg:text-center">
            <Query
              api={`/passport-api/check`}
              options={{
                fetcher: () => ({ avatarURL: 'http://', figureName: 'Ethan' }),
              }}
            >
              {({
                avatarURL,
                figureName,
              }: {
                avatarURL: string;
                figureName: string;
              }) => (
                <SuccessView
                  styledAvatar={avatarURL}
                  reservedFigure={figureName}
                />
              )}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

export default Success;
