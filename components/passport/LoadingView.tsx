interface Props {
  message?: string;
}

const Loading = ({
  message = 'Almost there! We are stylizing your avatar.',
}: Props) => (
  <div className="flex-col flex justify-center items-center">
    <img
      className="max-w-sm mx-auto rounded-xl my-12"
      src="/images/news/Avatars-Transition.gif"
      alt="Sapien Avatar Transition"
    />
    <span></span>
    <span
      className="
          text-base
          text-white
          inline-block
          py-1
          px-2
          tracking-wide
        "
    >
      {message}
    </span>
  </div>
);

export default Loading;
