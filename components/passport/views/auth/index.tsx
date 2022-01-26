import Link from 'next/link';

interface Props {
  redirect: string;
}

const FigureView = ({ redirect }: Props) => {
  return (
    <>
      <div className="px-4 xl:px-0 text-center">
        <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
          Welcome to the Sapien Tribe!
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5 text-justify">
          We are very happy to have you here!, before we can start the
          experience of creating your unique passport, we require you to be
          logged into your account.
        </p>
      </div>
      <div className="my-10 flex justify-center">
        <p className="text-base inline center-text">
          Click
          <Link href={`/login?redirect=${redirect}`}>
            <a className="font-medium text-sapien hover:text-purple-500">
              &nbsp;here&nbsp;
            </a>
          </Link>
          to login.
        </p>
      </div>
    </>
  );
};

export default FigureView;
