// assets
import { SPNLogo } from 'assets';

// components
import { Redirect } from 'components/common';

// hooks
import { useAuth } from 'context/user';

interface Props {
  children: React.ReactElement;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn) return null;

  if (me) return <Redirect path="/" />;

  return (
    <>
      <div className="min-h-full flex">
        <div className="hidden lg:block relative w-0 flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="auth-image"
            className="absolute object-cover h-0 min-h-full	min-w-full"
            src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset2.jpeg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex justify-center items-center">
                <SPNLogo />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold">{title}</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
