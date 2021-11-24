// components
import {
  AuthHero,
  HistoricalFigures,
  PublicHero,
  PassportFeatures,
} from 'components/passport';

// hooks
import { useAuth } from 'context/user';

// types
import { NextPage } from 'next';

const PassportPage: NextPage = () => {
  const { me, isLoggingIn } = useAuth();

  const renderHeroSection = () => {
    if (isLoggingIn) return <span>White Section</span>;

    if (me) return <AuthHero />;

    return <PublicHero />;
  };

  return (
    <div>
      {renderHeroSection()}
      <PassportFeatures />
      <HistoricalFigures />
    </div>
  );
};

export default PassportPage;
