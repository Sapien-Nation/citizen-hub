// components
import { Layout } from 'components/auth';
import { Head } from 'components/common';

// types
import { NextPage } from 'next';

const ForgotPage: NextPage = () => (
  <>
    <Head title="Check Email" />
    <Layout title="Check Your Email!">
      <p className="text-purple-700">
        An email was sent to your inbox, please take a look
      </p>
    </Layout>
  </>
);

export default ForgotPage;
