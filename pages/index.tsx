/* eslint-disable react/no-unescaped-entities */
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

// components
import { Head } from 'components/common';
import { Globe } from 'components/landing';
// hooks
import { useAuth } from 'context/user';

// types
import { NextPage } from 'next';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  const { me } = useAuth();
  useEffect(() => {
    if (window) {
      const { preloadImages, preloadFonts } = require('utils/homepage');
      const backtopEl = document.querySelector('.backtop');
      const headerEl = document.querySelector('#header');
      // Preload  images and fonts
      Promise.all([preloadImages('.tiles__line-img')]).then(() => {
        // Remove loader (loading class)
        document.body.classList.remove('loading');

        // Initialize the Locomotive scroll
        import('locomotive-scroll').then((LocomotiveScroll) => {
          const scroll = new LocomotiveScroll.default({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
          });

          backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
        });
        // const scroll = new LocomotiveScroll({
        //     el: document.querySelector('[data-scroll-container]'),
        //     smooth: true
        // });
        // @ts-ignore
      });
    }

    // @ts-ignore
    // return () => scroll.destroy();
  }, []);
  return (
    <>
      <Head title="Nation" />
      <div className="loading">
        <main data-scroll-container>
          <section id="header" className="content">
            <Globe />
            <h2 className="content__title" data-scroll data-scroll-speed="2">
              Become a Freshly Minted Citizen of the Metaverse
            </h2>
            {me === null && (
              <div className="w-96 animate-bounce mt-3 shadow-[8px_8px_#8133EE] rounded-full border border-black dark:border-2 sm:mt-0 sm:ml-3">
                <Link href="/register">
                  <a
                    href="#"
                    className="flex items-center font-extrabold justify-center px-8 py-3 border border-transparent text-base font-medium bg-white rounded-full text-sapien bg-white hover:bg-yellow-50 md:py-4 md:text-2xl md:px-10"
                  >
                    Join the waitlist
                  </a>
                </Link>
              </div>
            )}
            <p className="content__pretitle">
              Find Your Tribes. Launch Your Own Tokens. Shape the New
              Renaissance.
            </p>
          </section>
          <section className="tiles tiles--rotated" id="grid2">
            <div className="tiles__wrap">
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
                data-scroll-direction="horizontal"
              >
                <div className="tiles__line-img"></div>
                <div className="tiles__line-img"></div>
                <div className="tiles__line-img"></div>
                <div
                  className="tiles__line-img"
                  style={{
                    backgroundImage: 'url(landing/Abraham_Lincoln.png)',
                  }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Adam_Smith.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{
                    backgroundImage: 'url(landing/Alexander_Hamilton.png)',
                  }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
                data-scroll-direction="horizontal"
              >
                <div className="tiles__line-img"></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Arminius.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Bob_Marley.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Buddha.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Buddha2.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Buddha3.png)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
                data-scroll-direction="horizontal"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Buddha4.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Charles_Darwin.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Che_Guevara.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Clara_Barton.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Diogenes.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{
                    backgroundImage: 'url(landing/Edsger_Dijkstra.png)',
                  }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
                data-scroll-direction="horizontal"
              >
                <div
                  className="tiles__line-img"
                  style={{
                    backgroundImage: 'url(landing/George_Washington.png)',
                  }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Harriet_Tubman.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/John_F_Kennedy.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{
                    backgroundImage: 'url(landing/John_von_Neumann.png)',
                  }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Karl_Marx.png)' }}
                ></div>
                <div className="tiles__line-img"></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
                data-scroll-direction="horizontal"
              >
                <div className="tiles__line-img"></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Kobe_Bryant.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Michaelangelo.png)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(landing/Mozart.png)' }}
                ></div>
                <div className="tiles__line-img"></div>
                <div className="tiles__line-img"></div>
              </div>
            </div>
          </section>
          <section className="content content--numbered">
            <p className="content__text" data-scroll data-scroll-speed="2">
              One tool to help you do it all. The Passport will be a unique NFT
              that grants citizenship to the Sapien Tribe and the communities in
              the Sapien ecosystem. Powerful utilities to navigate the
              Metaverse: Community Social Ledger to build reputation and tell
              the story of your contributions Unique ticket to Sapien Events and
              events from our partner communities Give you irrevocable access to
              being a Sapien Tribe Citizen Holders will have the opportunity to
              choose an avatar of one of their favorite figures from history to
              celebrate our diverse histories and unite to build our shared
              future.
            </p>
          </section>
          <section className="tiles" id="grid">
            <div className="tiles__wrap">
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid"
                data-scroll-direction="horizontal"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/30.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/29.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/28.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/27.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/26.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/25.jpg)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="2"
                data-scroll-target="#grid"
                data-scroll-direction="horizontal"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/24.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/23.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/22.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/19.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/18.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/17.jpg)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid"
                data-scroll-direction="horizontal"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/16.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/15.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/14.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/13.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/12.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo1/11.jpg)' }}
                ></div>
              </div>
            </div>
          </section>
          <section className="content content--feature">
            <p
              className="content__breakout content__breakout--big"
              data-scroll
              data-scroll-speed="3"
              data-scroll-direction="horizontal"
            >
              endless acceleration toward infinity
            </p>
            <p
              className="content__breakout content__breakout--medium"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-direction="horizontal"
            >
              the greatest barrier to your enlightenment
            </p>
          </section>
          <section className="content content--numbered">
            <p className="content__text" data-scroll data-scroll-speed="2">
              The conservation of novelty is simply that, over time, the
              universe has become more complicated. New levels of complexity
              become the foundations for yet deeper levels of complexity. And
              this phenomenon of the production and conservation of what I call
              novelty is not something which goes on only in the biological
              domain or only in the cultural domain or only in the domain of
              physics. It is a trans-categorical impulse in reality, meaning:
              it’s everywhere. <em>Everywhere!</em>
            </p>
          </section>
          <section className="tiles tiles--columns" id="grid3">
            <div className="tiles__wrap">
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid3"
                data-scroll-direction="vertical"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/20.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/19.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/18.jpg)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid3"
                data-scroll-direction="vertical"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/16.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/3.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/14.jpg)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid3"
                data-scroll-direction="vertical"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/12.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/11.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/10.jpg)' }}
                ></div>
              </div>
              <div
                className="tiles__line"
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid3"
                data-scroll-direction="vertical"
              >
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/8.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/7.jpg)' }}
                ></div>
                <div
                  className="tiles__line-img"
                  style={{ backgroundImage: 'url(img/demo2/6.jpg)' }}
                ></div>
              </div>
            </div>
          </section>
          <section className="content">
            <a className="backtop" data-scroll data-scroll-speed="4">
              Be the change
            </a>
            <div className="frame frame--footer">
              <a href="https://twitter.com/codrops" className="frame__author">
                @codrops
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
