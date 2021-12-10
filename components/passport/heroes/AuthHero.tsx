// components
import PassportLinkForm from 'components/passport/PassportLinkForm';

const AuthHero = () => {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <p className="mt-3 max-w-md mx-auto uppercase font-extrabold text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Sapien Passport
          </p>
          <h1 className="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Join</span>{' '}
            <span className="block xl:inline">The new Web</span>
          </h1>
          <div className="mt-3">
            <PassportLinkForm />
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full flex items-center justify-center">
        <video
          className="text-center mt-14 mx-auto"
          width="500"
          height="750"
          controls
        >
          <source
            src="https://www.youtube.com/embed/sJzaZg9nuNo?w=540&h=960"
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  );
};

export default AuthHero;
