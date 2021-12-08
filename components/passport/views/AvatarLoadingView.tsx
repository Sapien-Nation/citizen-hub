// components
import { AnimatedAvatar, LottiePlayer } from 'components/common';

const AvatarLoadingView = () => (
  <div className="flex-col flex justify-center items-center">
    <div className="w-64">
      <AnimatedAvatar />
    </div>
    <span></span>
    <span
      className="
          text-base
          inline-block
          py-1
          px-2
          text-purple-600
          tracking-wide
        "
    >
      Generating your avatar . . .
    </span>
  </div>
);

export default AvatarLoadingView;
