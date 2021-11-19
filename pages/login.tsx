// components
import { Layout, LoginForm } from 'components/auth';
import { Head } from 'components/common';

const LoginPage = () => (
  <>
    <Head title="Access" />
    <Layout title="Log in">
      <LoginForm />
    </Layout>
  </>
);

export default LoginPage;
