import { Twitter } from 'assets';
import { DownloadIcon } from '@heroicons/react/outline';

// components
import { Redirect } from 'components/common';

// hooks
import { useAuth } from 'context/user';
import { downloadAvatar } from 'api/passport';
import { useToast } from 'context/toast';
import { ExternalLinkIcon } from '@heroicons/react/solid';

/* eslint-disable @next/next/no-img-element */
interface Props {
  reservedFigure: string;
  styledAvatar: string;
  onDownload: () => void;
}

const protocolURL = process.env.NEXT_PUBLIC_PROTOCOL_URL;

const SuccessView = ({ reservedFigure, styledAvatar, onDownload }: Props) => {
  const toast = useToast();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn) return null;

  if (me === null) return <Redirect path="/" />;

  const prefilledTweet = `🎉 Proud to share that I'm one of the first founding members of the Sapien Nation, the first digital nation in the metaverse! I chose ${reservedFigure} to represent me as my avatar and I'm excited to bring their spirit to everything we do as a nation. 
  Go Sapien!
  `;

  const downloadImage = async () => {
    try {
      const data = await downloadAvatar(styledAvatar);
      let a = document.createElement('a');
      a.download = `${reservedFigure}-SapienNation-Avatar.png`;
      a.href = `data:image/png;base64,${data}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      onDownload();
    } catch (err) {
      toast({
        message: err,
      });
    }
  };

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
            {`Congratulations! You've chosen ${reservedFigure} as your
            historical avatar! 🎉`}
          </h2>
        </div>
        <div className="space-y-4 max-w-3xl text-center m-auto">
          <div className="mt-3">
            <p className="text-gray-300 text-lg mt-5">
              Champion their values and bring your unique voice to the founding
              of the <span className="italic">Sapien Nation</span>.
            </p>

            <p className="text-gray-300 text-lg mt-2">
              Your passport will be available to mint on{' '}
              <span className="underline">April 20, 2022</span>. An email has
              been sent to <span className="underline">{me.email}</span> with
              further details on minting your passport. If you have any
              questions send an email to{' '}
              <a
                href="mailto:passports@sapien.network"
                className="text-sapien-60"
              >
                passports@sapien.network
              </a>
              .
            </p>
          </div>
          <div>
            <div className="aspect-w-1 aspect-h-1 sm:aspect-w-3 sm:aspect-h-2">
              <img
                className="object-cover max-w-sm mx-auto rounded-xl shadow-lg shadow-white/50 border-double border-4 border-sky-500"
                src={styledAvatar}
                alt="Sapien Avatar Transition"
              />
            </div>
            <div>
              <p className="text-xs mt-8 text-gray-400">
                Download your picture, share on twitter and discord!
              </p>
              <div className="flex justify-center mt-4 mb-6 gap-3 items-center max-w-md m-auto">
                <a
                  href={`${protocolURL}mint`}
                  className="relative flex items-center w-full shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:px-8"
                >
                  Launch the App{' '}
                  <ExternalLinkIcon className="text-white w-6 h-6 mr-2" />
                </a>
              </div>
              <div className="flex justify-center mt-2 gap-3 items-center max-w-md m-auto">
                <button
                  type="button"
                  className="relative flex items-center w-full shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:px-8"
                  onClick={downloadImage}
                >
                  <DownloadIcon className="text-white w-6 h-6 mr-2" /> Download
                  Portrait
                </button>
                <a
                  href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${prefilledTweet}&hashtags=DigitalNation`}
                  className="relative flex items-center shine bg-gradient-to-r from-white to-sky-300 font-extrabold justify-center px-2 rounded-md text-sky-700 h-12 py-2 md:px-8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter width={30} />
                  Tweet
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
