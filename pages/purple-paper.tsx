import Link from 'next/link';

// components
import Image from 'next/image';
import { Head } from 'components/common';

// types
import { NextPage } from 'next';

const links = [
  { label: 'Download PDF', href: '/The_Purple_Paper_v1.1.pdf' },
  { label: 'Join our Community', href: 'https://discord.gg/DgUfraghMW' },
  { label: 'Contribute', href: 'https://github.com' },
];

const PurplePaper: NextPage = () => {
  return (
    <>
      <Head title="Purple Paper" />
      <div className="w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl pt-12 lg:pt-24">
            Learn about the Sapien vision for the Metaverse
          </h2>
          <div className="w-96 mx-auto">
            <div className="shadow-2xl shadow-yellow-500/60">
              <Link href="/The_Purple_Paper_v1.1.pdf">
                <a target="_blank">
                  <Image
                    alt={'Purple Paper'}
                    src={'/images/purple-paper.png'}
                    width="625"
                    height="800"
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-evenly py-5">
            {links.map(({ label, href }) => (
              <Link href={href} key={label}>
                <a
                  target="_blank"
                  className="border font-extrabold px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8 text-center"
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PurplePaper;
