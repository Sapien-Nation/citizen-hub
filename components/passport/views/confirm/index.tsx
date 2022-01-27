/* eslint-disable @next/next/no-img-element */
// types
import type { ISOString } from 'tools/types/common';

interface Props {
  reservedFigure: string | null;
  expiresAt: ISOString | null;
  onConfirm: () => void;
}

const Confirm = ({ onConfirm }: Props) => {
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
          <span className="block text-white">Confirm your passport!</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-2xl">
          TODO Confirm for this view, we need to show a message like you have
          reserver ... and we will reserve it till xxxx/xxx/xx please click on
          the button to confirm
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sapien bg-white hover:bg-indigo-50 sm:px-8"
            onClick={onConfirm}
          >
            Confirm
          </a>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
