// components
import { LottiePlayer } from 'components/common';
import { useTheme } from 'next-themes';

// utils
import { mergeClassNames } from 'utils/styles';

interface Props {
  code: number;
}

const ErrorView = ({ code }: Props) => {
  const { theme } = useTheme();

  const renderMessage = () => {
    switch (code) {
      // Link Status
      case 100:
        return 'Link is not active yet';
      case 101:
        return 'Expired Link';
      case 102:
        return 'No passports available for this link';
      case 103:
        return 'Link not found';

      // User already have a passport
      case 201:
        return 'Historic figure name pending for review';
      case 202:
        return 'Image pending for review';
      case 204:
        return 'You already have a passport';

      case 300:
        return 'Listing is closed for now';

      default:
        return 'Please try again in 30mins';
    }
  };

  const renderLottie = () => {
    switch (code) {
      case 100:
      case 101:
      case 102:
      case 103:
        return (
          <LottiePlayer lottie="https://assets2.lottiefiles.com/packages/lf20_8gd5woxm.json" />
        );
      case 201:
      case 202:
      case 203:
      case 300:
      default:
        return (
          <LottiePlayer lottie="https://assets7.lottiefiles.com/packages/lf20_3dw8ed6q.json" />
        );
    }
  };

  return (
    <div className={theme && theme === 'light' ? 'bg-gray-50' : ''}>
      <div className="lg:relative py-12 lg:h-full sm:h-72">
        <div className="w-full py-12 h-64 flex items-center justify-center">
          {renderLottie()}
        </div>
        <div className=" w-full pb-16 text-center">
          <p
            className={mergeClassNames(
              theme && theme === 'dark' ? 'text-white' : 'text-gray-700',
              'w-full font-extrabold tracking-tight  sm:text-xl'
            )}
          >
            {renderMessage()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorView;
