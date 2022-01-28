import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// components
import { Navbar, Footer } from 'components/navigation';

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

  if (pathname === '/') {
    return (
      <div className="relative flex flex-col min-h-screen">
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
