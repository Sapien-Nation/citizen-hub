// components
import { LottiePlayer } from 'components/common';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

interface Props {
  setView: (view: PassportViews) => void;
}

const StartView = ({ setView }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="lg:relative">
        <div className="w-full text-center">
          <h2 className="text-5xl font-extrabold font-sans mb-12 skew-y-3">
            <span className="underline decoration-4 decoration-sapien text-7xl">
              Welcome to
            </span>{' '}
            <br /> the Sapien Nation!
          </h2>
          <img src="/images/Avatar-full-size.gif" className="h-96" alt="" />

          <button
            onClick={() => setView(PassportViews.Lookup)}
            className="animate-bounce bg-sapien py-2 px-8 border border-transparent rounded-md shadow-sm text-xl font-bold text-white bg-sapien-purple hover:bg-sapien-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartView;
