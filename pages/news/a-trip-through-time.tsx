/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

const News: NextPage = () => {
  return (
    <>
      <Head
        title="News"
        description="Sapien is doing some groundbreaking work and naturally the news follows. When that news breaks, we’ll keep you updated here."
        image="/images/Sapien_Logo.png"
      />
      <div className="relative py-16 overflow-hidden bg-neutral-900 break-words">
        <div className="relative px-4 sm:px-8 lg:px-8">
          <div className="text-lg max-w-4xl mx-auto mb-12">
            <h1 className="mt-2 max-w-prose block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A Trip Through Time
            </h1>
            <span className="text-center block text-gray-400">Teja Aluru</span>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              We made the first avatars in a WeWork with my friend Kalani, using
              old Python notebooks from when he first started getting into deep
              learning.
            </blockquote>
            <img
              className="max-w-lg mx-auto rounded-xl my-12"
              src="/images/news/trippy-psychedelic.gif"
              alt="Sapien Avatar Transition"
            />
          </div>
          <div className="mt-6 px-8 sm:px-0 font-light text-lg leading-9 tracking-wide gap-12 flex flex-col text-white mx-auto sm:px-6 max-w-6xl">
            <p>
              <span className="font-extrabold text-xl block mb-2">
                San Francisco, CA. March 11, 2022.
              </span>{' '}
              When I joined Sapien, my first task was to create artwork for the
              first{' '}
              <a
                href="https://www.sapien.network/passport"
                target="_blank"
                rel="noreferrer"
                className="text-sapien-60"
              >
                passport NFT collection
              </a>
              . While most NFT projects drop randomly generated, fairly
              homogenous collections, Sapien aspired to make each avatar highly
              individualized and meaningful. Unlike other projects, each person
              gets to be involved in the avatar creation process through
              selecting their historical figure as well as their avatar’s
              picture.
            </p>
            <p>
              We made the first avatars in a WeWork with my friend Kalani, using
              old Python notebooks from when he first started getting into deep
              learning. There were two requirements - the collection needed to
              feature stylized figures from history and that they should look
              trippy. The collection was aptly named “A Trip Through Time.” The
              pipeline overall was fairly simple and relied on two pre-trained
              models, one for semantic segmentation and another one for style
              transfer.
            </p>

            <p>
              First, the semantic segmentation model produces classifications
              for each pixel in an image (in this case determining if a pixel
              belongs to a person or the background). We use this to
              automatically remove the background from any images.
            </p>
            <p>
              Second, the style transfer model was used to apply the styling for
              the images. The task of neural style transfer is to take the
              “style” of one image and apply it over to another by optimizing
              the statistics between two images. This allows you to replicate
              the styling of say Picasso onto your favorite picture. In our
              case, we used the Sapien logo to stylize the images of each
              historical figure. Our initial avatars looked like this.
            </p>
            <img
              className="max-w-lg mx-auto rounded-xl my-12"
              src="/images/news/sapien_mlk_image_1.png"
              alt="Sapien mlk image"
            />
            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              Reaching New Peaks
            </h2>

            <p>
              While the style and look certainly wasn’t the worst, the avatars
              still didn’t feel “special.” The colors weren’t bright, the images
              showed lots of negative space, and many avatars lost detail in
              their features. In order to resolve these issues, I went back to
              the drawing board.
            </p>
            <p>
              I first pulled all Sapien assets from the company drive to see the
              stylization results for different variations of the logo. In
              addition, after some suggestions from our CMO, Hash, I
              pre-processed the avatars after the background removal to sharpen
              the details in some of the images. This led to some interesting
              results.
            </p>
            <div className="flex justify-center items-center flex-col gap-4 sm:flex-row">
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/AbeLincolnStyle.png"
                alt="Abraham Lincoln"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Lincoln_EdgeFilter_BordersBlack.png"
                alt="Abraham Lincoln"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/AbeLincoln_BordersBlack.png"
                alt="Abraham Lincoln"
              />
            </div>
            <p>
              I personally liked the style on the right, but the team agreed
              that the middle result was best given it balanced the vibrancy of
              the colors with the preservation of the facial features.
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              Smoothening the Experience
            </h2>
            <p>
              While we were all satisfied with the stylization in the middle,
              Hash found that the avatars didn’t pop quite as much when they
              were shrunk to thumbnail size for socials. He used Photoshop’s
              noise reduction tool to smooth out the image, and then increased
              the brightness and contrast of the image. This led to the
              following final avatar results shown below.
            </p>
            <div className="flex justify-center items-center flex-col gap-4 sm:flex-row">
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/ALincoln.png"
                alt="Abraham Lincoln"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Arminius.png"
                alt="Arminius"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Sapien_avatar.png"
                alt="Sapien_avatar"
              />
            </div>

            <p>
              I didn’t quite know how Photoshop did it’s noise reduction, but
              from my best guess, it was using an{' '}
              <a
                href="https://en.wikipedia.org/wiki/Edge-preserving_smoothing"
                target="_blank"
                className="text-sapien-60"
                rel="noreferrer"
              >
                edge-preserving image smoothing technique
              </a>{' '}
              Luckily, there was an{' '}
              <a
                href="https://docs.opencv.org/4.x/df/dac/group__photo__render.html#gafaee2977597029bc8e35da6e67bd31f7"
                target="_blank"
                rel="noreferrer"
                className="text-sapien-60"
              >
                edge-preserving filter in OpenCV
              </a>{' '}
              that provided similar results to the Photoshop noise reduction. I
              was also able to automate the brightness/contrast adjustment with
              OpenCV functions.
            </p>
            <p>
              If you like the art style and want to create your own, our
              passport sale starts March 14th for whitelisted members.
              Purchasers who participate in the sale will get access to their
              own historical figure stylized in the Sapien manner. For those
              interested in learning more about the passport and its utility,
              check out{' '}
              <Link href="/news/why-nft-passports" passHref>
                <a rel="noreferrer" className="text-sapien-60">
                  Why NFT Passports?
                </a>
              </Link>{' '}
              As opposed to other NFTs that simply sit in a wallet, these are
              works of technoart you can be proud of and use as your signature!
            </p>

            <p>
              For those who made it to the end, this is some cool shiz I whipped
              up the other day 👀
            </p>

            <div className="flex justify-center items-center flex-col gap-4 sm:flex-row">
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Lincoln_Stylized_1.png"
                alt="Abraham Lincoln Stylized"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Lincoln_Stylized.png"
                alt="Abraham Lincoln Stylized"
              />
              <img
                className="max-w-xs rounded-xl"
                src="/images/news/Lincoln_Stylized_4.png"
                alt="Abraham Lincoln Stylized"
              />
            </div>

            <div className="mt-10">
              <h5 className="font-extrabold">About Sapien Network</h5>
              Sapien is the first Digital Nation in the metaverse, a Republic of
              DAOs powered by Sapien’s first-of-its-kind NFT Passport. Our
              mission is to enable people to reclaim their agency by building
              sovereign communities focused on collective action and cooperative
              ownership. <br /> For more information, visit sapien.network.{' '}
              <Link
                href="https://www.linkedin.com/company/sapien.network/mycompany/?viewAsMember=true"
                passHref
              >
                <a target="_blank" className="underline">
                  LinkedIn
                </a>
              </Link>
              ,{' '}
              <Link href="https://twitter.com/sapien_network" passHref>
                <a target="_blank" className="underline">
                  Twitter
                </a>
              </Link>{' '}
              and{' '}
              <Link href="https://discord.com/invite/AtGS2pe" passHref>
                <a target="_blank" className="underline">
                  Discord
                </a>
              </Link>
            </div>
            <div>
              <h5 className="font-extrabold">Media contacts:</h5>
              <ul className="list-none">
                <li>
                  Missy Martin <br />
                  Chief Sustainability Officer <br />
                  <a href="mailto: missy@sapien.network" className="underline">
                    missy@sapien.network
                  </a>
                </li>{' '}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
