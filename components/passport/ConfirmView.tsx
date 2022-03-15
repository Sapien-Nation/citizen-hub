/* eslint-disable @next/next/no-img-element */

// api
import { claimFigureName } from 'api/passport/claim';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

// context
import { useToast } from 'context/toast';

// types
import type { ISOString } from 'tools/types/common';

interface Props {
  distributionId: string;
  reservedFigure: string | null;
  setView: (view: PassportViews) => void;
}

const Confirm = ({ distributionId, reservedFigure, setView }: Props) => {
  const toast = useToast();

  const handleConfirm = async () => {
    try {
      await claimFigureName({ distributionId, figureName: reservedFigure });
      setView(PassportViews.GalleryClaim);
    } catch (error) {
      toast({
        message:
          error ||
          'Something Went wrong please contact passport@sapien.network',
      });
    }
  };

  return (
    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden text-left">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 mix-blend-multiply" />
      </div>
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">
            Confirm your historical avatar!
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-2xl">
          Please Confirm that you would like to reserve{' '}
          <span className="underline decoration-indigo-500 decoration-2 font-bold dark:text-white">
            {reservedFigure}
          </span>{' '}
        </p>
        {/* <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-2xl">
          Please remember that you have till{' '}
          <span className="underline decoration-indigo-500 decoration-2 font-bold dark:text-white">
            {new Intl.DateTimeFormat().format(new Date(expiresAt))}
          </span>
        </p> */}
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <button
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sapien bg-white hover:bg-indigo-50 sm:px-8"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
