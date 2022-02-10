import Link from 'next/link';
import { useRef } from 'react';

// types
import { NextPage } from 'next';

// components
import { Head, VideoPlayer } from 'components/common';

const News: NextPage = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: '/landing/3dCoin.jpeg',
    sources: [
      {
        src: '/landing/TokenVideo.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      <Head
        title="News"
        description="Sapien is doing some groundbreaking work and naturally the news follows. When that news breaks, we’ll keep you updated here."
        image="/images/Sapien_Logo.png"
      />
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Cooming soon:{' '}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            The Sovereign.
          </span>
        </h2>
      </div>
      <div className="relative py-16 overflow-hidden bg-neutral-900">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <div className="max-w-6xl flex flex-col gap-6 mx-auto px-8 sm:px-6 lg:px-8 my-24">
        <p className="text-xl sm:text-2xl">
          Sapien is finalizing plans to introduce a new token, as an evolution
          of the SPN token, based on the Tribe Treasury Token standard outlined
          in the Purple Paper.
        </p>
        <p className="text-xl sm:text-2xl">
          This planned new token, the Sapien Tribe Sovereign (STS), will serve
          as a replacement for the existing Sapien Token (SPN) and SPN will no
          longer be supported once STS is launched. All existing Sapien Token
          (SPN) holders will have the opportunity to convert SPN to STS at a
          conversion rate to be determined. All SPN in inventory will be
          converted to STS.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12">
          The{' '}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            STS
          </span>{' '}
          will then serve as the sovereign currency for the
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            {' '}
            Sapien Tribe.
          </span>
        </h2>
        <p className="text-xl sm:text-2xl mb-12">
          STS will be the primary currency for goods and services within the
          Sapien Tribe, and will be utilized for Venture Governance: a token
          model that simplifies internal governance and enables the Nation to
          fund other Tribes within the ecosystem.
        </p>
        <p className="text-xl sm:text-2xl mb-12">
          The Sovereign launch date is tentatively scheduled for Q2 of 2022.
          Join our community, or continue to check this site to stay up to date
          on all public announcements regarding the STS!
        </p>
        <Link href="https://discord.gg/DVDe3ZwuYR">
          <a
            target="_blank"
            className="mt-12 border font-extrabold justify-center px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
          >
            Join our Community
          </a>
        </Link>
      </div>
    </>
  );
};

export default News;
