import Link from 'next/link';

// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

const Token: NextPage = () => {
  return (
    <>
      <Head
        title="Token"
        description="Sapien is doing some groundbreaking work and naturally the news follows. When that news breaks, we’ll keep you updated here."
        image="/images/Sapien_Logo.png"
      />
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <h2 className="md:text-7xl text-4xl font-extrabold drop-shadow-lg md:filter-none">
          Coming soon: <br />
          The Sapien Tribe Token
        </h2>
      </div>
      <div className="relative py-16 overflow-hidden max-w-6xl rounded-xl mx-auto">
        <video controls autoPlay>
          <source src={'/landing/TokenVideo.mp4'} type="video/mp4" />
        </video>
      </div>
      <div className="max-w-6xl flex flex-col gap-6 mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <p className="text-xl sm:text-2xl">
          Sapien is finalizing plans to introduce an evolution of the SPN
          utility token, based on the Tribe Treasury Token standard outlined in
          the{' '}
          <Link href="/The_Purple_Paper_v1.1.pdf">
            <a target="_blank" className="text-sapien-80 font-extrabold">
              Purple Paper
            </a>
          </Link>{' '}
          – the Sapien Tribe Token (STT).
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 italic">
          All SPN holders will receive notification regarding the conversion of
          SPN to STT, which will occur at a date and rate to be determined. All
          SPN held and in inventory will be converted to STT.
        </h2>
        <p className="text-xl sm:text-2xl mb-12">
          The STT will be used within the ecosystem as the sovereign currency
          for the Sapien Tribe. STT will also be used for Venture Governance: a
          token model that simplifies internal governance within the ecosystem
          enabling the Nation to fund other ecosystem Tribes.
        </p>
        <p className="text-xl sm:text-2xl mb-12">
          The SPN to STT conversion data is tentatively scheduled for Q2 of
          2022. Join our community, or continue to check this site and stay up
          to date on all public announcements regarding the STT!
        </p>
        <Link href="https://discord.gg/DgUfraghMW">
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

export default Token;
