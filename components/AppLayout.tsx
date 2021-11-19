// components
import { Navbar } from 'components/navigation';

interface Props {
  children: React.ReactElement;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
