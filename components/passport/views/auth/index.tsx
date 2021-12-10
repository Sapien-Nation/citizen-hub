import Link from 'next/link';

interface Props {
  linkID: string;
}

const FigureView = ({ linkID }: Props) => {
  return (
    <>
      <div className="px-4 xl:px-0">
        <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
          Welcome to the Sapien Tribe!
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
          To claim your passport please input your favorite historical figure.
          Your choice of figure should reflect the values you will champion as a
          member of our tribe.
        </p>
      </div>
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
          <Link href={`/login?redirect=/passport/${linkID}`}>
            <a>Login</a>
          </Link>
          <Link href={`/register?redirect=/passport/${linkID}`}>
            <a>Register</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default FigureView;
