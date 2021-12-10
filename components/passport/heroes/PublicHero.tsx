import Link from 'next/link';

// components
import PassportLinkForm from 'components/passport/PassportLinkForm';

const PublicHero = () => {
  return (
    <main className="mt-18 mx-auto max-w-6xl px-4 sm:mt-24">
      <div className="text-center">
        <p className="text-xs uppercase font-bold tracking-tight text-gray-500">
          <span className="block xl:inline">Sapien Passports</span>
        </p>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          <span className="block xl:inline">Sapien Passports</span>{' '}
        </h1>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="mt-3">
            <PassportLinkForm />
          </div>
        </div>
        <video
          className="text-center mt-14 mx-auto"
          width="750"
          height="500"
          controls
        >
          <source
            src="https://www.youtube.com/embed/sJzaZg9nuNo"
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  );
};

export default PublicHero;
