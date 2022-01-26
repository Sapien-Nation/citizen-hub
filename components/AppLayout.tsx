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

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[asPath]}
          containerRef={containerRef}
        >
          <div className="flex justify-center">
            <main data-scroll-container ref={containerRef}>
              {children}
            </main>
          </div>
        </LocomotiveScrollProvider>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
