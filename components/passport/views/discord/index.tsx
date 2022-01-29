/* eslint-disable @next/next/no-img-element */
interface Props {
  reservedFigure?: string;
}

const Discord = ({ reservedFigure }: Props) => {
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
          <span className="block text-white">Congratulations!</span>
        </h1>
        {reservedFigure && (
          <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-3xl">
            You have selected{' '}
            <span className="underline decoration-indigo-500 decoration-2 font-bold dark:text-white">
              {reservedFigure}
            </span>{' '}
            as your avatar in the Sapien Tribe!
          </p>
        )}
        <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-3xl">
          Please join our community and add yourself to the whitelist to secure
          your historical pick.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <a
            href="https://discord.gg/DVDe3ZwuYR"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sapien bg-white hover:bg-indigo-50 sm:px-8"
          >
            Join our Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discord;
