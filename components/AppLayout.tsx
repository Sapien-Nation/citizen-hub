import { useRouter } from 'next/router';

// components
import { Navbar } from 'components/navigation';

interface Props {
  children: React.ReactElement;
}

const AppLayout = ({ children }: Props) => {
  const { pathname } = useRouter();

  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/logout')
  ) {
    return children;
  }

  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
