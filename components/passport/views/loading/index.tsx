// components
import { AnimatedAvatar, LottiePlayer } from 'components/common';

const Loading = () => (
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
          text-sapien
          tracking-wide
        "
    >
      Generating your avatars . . .
    </span>
  </div>
);

export default Loading;
