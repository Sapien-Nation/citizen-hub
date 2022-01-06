// components
import { LottiePlayer } from 'components/common';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

interface Props {
  setPassportView: (view: PassportViews) => void;
}

const StartView = ({ setPassportView }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:relative">
        <div className="w-ful text-center">
          <h2 className="text-5xl font-extrabold mb-12 skew-y-3">
            <span className="underline decoration-4 decoration-purple-600 text-7xl">
              welcome to
            </span>{' '}
            <br /> the Sapien tribe!
          </h2>
          <button
            onClick={() => setPassportView(PassportViews.Figure)}
            className="animate-bounce py-2 px-8 border border-transparent rounded-md shadow-sm text-xl font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartView;
