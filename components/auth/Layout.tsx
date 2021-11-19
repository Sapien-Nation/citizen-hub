import Image from 'next/image';

// assets
import authImage from 'public/images/auth.jpeg';
import logoImage from 'public/images/logo.png';

interface Props {
  children: React.ReactElement;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image
                alt="Logo"
                src={logoImage}
                placeholder="blur"
                height={100}
                width={100}
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                {title}
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">{children}</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <Image
            alt="Login"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={authImage}
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
