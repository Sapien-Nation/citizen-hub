// components
import { Layout, RegisterForm } from 'components/auth';
import { Head } from 'components/common';

const RegisterPage = () => (
  <>
    <Head title="Sign up" />
    <Layout title="Sign up">
      <RegisterForm />
    </Layout>
  </>
);

export default RegisterPage;
