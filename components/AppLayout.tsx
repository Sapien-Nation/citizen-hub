import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// components
import { Navbar, Footer } from 'components/navigation';
import { Banner } from './common';

interface Props {
  children: React.ReactElement;
}

const AppLayout = ({ children }: Props) => {
  const { asPath, pathname } = useRouter();
  const containerRef = useRef(null);

  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/logout') ||
    pathname.startsWith('/forgot') ||
    pathname.startsWith('/change-password') ||
    pathname.startsWith('/cookie-policy')
  ) {
    return children;
  }

  if (pathname === '/' || pathname === '/passport') {
    return (
      <div className="relative flex flex-col min-h-screen">
        <Banner
          title="The Sapien Tribe NFT Passport sale will begin on March 14, 2022. "
          message="The Sapien Tribe NFT Passport sale will begin on March 14, 2022. "
        />
        <Navbar />{' '}
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[asPath]}
          containerRef={containerRef}
        >
          <main
            className="flex-1 flex flex-col"
            data-scroll-container
            ref={containerRef}
          >
            <div className="flex-1">{children}</div>
          </main>
        </LocomotiveScrollProvider>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <Banner
        title="The Sapien Tribe NFT Passport sale will begin on March 14, 2022. "
        message="The Sapien Tribe NFT Passport sale will begin on March 14, 2022. "
      />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
