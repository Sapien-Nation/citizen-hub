import { useRouter } from 'next/router';

// components
import { Navbar, Footer } from 'components/navigation';

interface Props {
  children: React.ReactElement;
}

const AppLayout = ({ children }: Props) => {
  const { pathname } = useRouter();

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
    <div
      className={`relative flex flex-col min-h-screen bg-gray-50 ${
        pathname.startsWith('/passport') && 'h-full'
      }`}
    >
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
