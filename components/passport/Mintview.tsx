import { ExternalLinkIcon } from '@heroicons/react/outline';

const protocolURL = process.env.NEXT_PUBLIC_PROTOCOL_URL;

const MintView = () => {
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
        <div className="text-lg leading-6 font-medium space-y-1 text-center">
          <h2 className="mb-12 block text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
            Continue in the Protocol
          </h2>
        </div>
        <div className="space-y-4 max-w-3xl text-center m-auto">
          <div className="mt-3">
            <p className="text-gray-300 text-lg mt-5">
              You are now ready to mint your passport!, please click the button
              below to be redirected to the Sapien Protocol app to continue with
              the minting.
            </p>
          </div>
          <div>
            <div>
              <div className="flex1 mt-2 gap-3 items-center max-w-md m-auto">
                <a
                  href={`${protocolURL}mint`}
                  className="relative flex items-center w-full shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:px-8"
                >
                  <ExternalLinkIcon className="text-white w-6 h-6 mr-2" />
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintView;
