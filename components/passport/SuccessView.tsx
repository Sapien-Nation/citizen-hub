import Link from 'next/link';
import { Twitter } from 'assets';
import { DownloadIcon } from '@heroicons/react/outline';

/* eslint-disable @next/next/no-img-element */
interface Props {
  reservedFigure: string;
  styledAvatar: string;
}

const SuccessView = ({ reservedFigure, styledAvatar }: Props) => {
  const prefilledTweet = `🎉 Proud to share that I'm one of the first founding members of the Sapien Nation, the first digital nation in the metaverse! I chose ${reservedFigure} to represent me as my avatar and I'm excited to bring their spirit to everything we do as a nation. 
  ${styledAvatar}
  Go Sapien! #HumansFirst
  `;

  const downloadImage = () => {
    fetch(styledAvatar, {
      mode: 'no-cors',
    })
      .then((response) => response.blob())
      .then((blob) => {
        let blobUrl = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.download = `${reservedFigure}-SapienNation-Avatar.png`;
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
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
        <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0">
          <div>
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover shadow-lg max-w-sm mx-auto rounded-xl"
                src={styledAvatar}
                alt="Sapien Avatar Transition"
              />
            </div>
            <div>
              <p className="text-xs mt-5 text-gray-400">
                Download your picture, share on twitter and discord!
              </p>
              <div className="flex mt-2 gap-3 items-center">
                <button onClick={downloadImage}>
                  <DownloadIcon className="text-white w-8 h-8" />
                </button>
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="flex items-center"
                  data-size="large"
                  data-text={prefilledTweet}
                  data-show-count="false"
                >
                  <Twitter width={40} />
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
          <div className="sm:col-span-3">
            <div className="space-y-4 max-w-xl">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h2 className="max-w-prose block text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
                  {`Congratulations! You've chosen ${reservedFigure} as your
                  historical avatar! 🎉`}
                </h2>
              </div>

              <div className="mt-3">
                <p className="text-gray-300 text-lg mt-5">
                  Champion their values and bring your unique voice to the
                  founding of the <span className="italic">Sapien Nation</span>.
                </p>

                <p className="text-gray-300 text-lg mt-2">
                  Your passport will be available to mint on{' '}
                  <span className="underline">April 20, 2022</span>. An email
                  has been sent to{' '}
                  <span className="underline">email@website.com</span> with
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
