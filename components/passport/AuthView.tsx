import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  redirect: string;
}

const AuthView = ({ redirect }: Props) => {
  const { push } = useRouter();
  return (
    <>
      <div className="px-4 xl:px-0 text-center">
        <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
          Welcome to the Sapien Nation
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5 text-justify">
          We are very happy to have you here! Before creating your unique Sapien
          NFT passport, you must be logged into your Sapien account.
        </p>
      </div>
      <div className="my-10 flex justify-center">
        <button
          type="button"
          className="relative flex items-center mt-8 shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
          onClick={() => {
            push(`/login?redirect=${redirect}`);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default AuthView;
