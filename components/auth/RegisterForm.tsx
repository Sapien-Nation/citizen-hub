import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// utils
import { EmailRegex, NameRegex, UsernameRegex } from 'utils/regex';

interface RegisterFormValues {
  displayName: string;
  email: string;
  password: string;
  username: string;
  terms: string;
  wallet: string;
}
const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    terms: Yup.bool().oneOf([true], 'You have to accept the terms'),
    wallet: Yup.bool().oneOf(
      [true],
      'You have to accept that a wallet will be created for you'
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } =
    useForm<RegisterFormValues>(formOptions);
  const { errors } = formState;
  const onSubmit = async (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="myemailaddress@email.com"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register('email', {
              pattern: {
                value: EmailRegex,
                message: 'Invalid email address',
              },
              required: {
                value: true,
                message: 'Invalid email address',
              },
            })}
            aria-invalid="true"
            aria-describedby="email-error"
          />
        </div>
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <div className="mt-1">
          <input
            id="username"
            type="text"
            autoComplete="username"
            required
            placeholder="johndoe"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register('username', {
              pattern: {
                value: UsernameRegex,
                message: 'Invalid username',
              },
              required: {
                value: true,
                message: 'Invalid username',
              },
              maxLength: {
                value: 20,
                message: 'Invalid username',
              },
            })}
            aria-invalid="true"
            aria-describedby="username-error"
          />
        </div>
        <p className="mt-2 text-sm text-red-600" id="username-error">
          {errors.username?.message}
        </p>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jonathan Doe"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register('displayName', {
              pattern: {
                value: NameRegex,
                message: 'Invalid name',
              },
              required: {
                value: true,
                message: 'Invalid name',
              },
              maxLength: {
                value: 40,
                message: 'Invalid name',
              },
            })}
            aria-invalid="true"
            aria-describedby="displayName-error"
          />
        </div>
        <p className="mt-2 text-sm text-red-600" id="displayName-error">
          {errors.displayName?.message}
        </p>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Thisismypassword123*"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register('password', {
              validate: (value: string) => {
                if (!/[a-z]/.test(value)) {
                  return 'At least one lowercase letter.';
                }

                if (!/[A-Z]/.test(value)) {
                  return 'At least one uppercase letter.';
                }

                if (!/[\d]/.test(value)) {
                  return 'At least one number.';
                }

                if (value?.length < 8) {
                  return 'At least 8 characters.';
                }

                return true;
              },
            })}
            aria-invalid="true"
            aria-describedby="password-error"
          />
        </div>
        <p className="mt-2 text-sm text-red-600" id="password-error">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            aria-invalid="true"
            aria-describedby="terms-error"
            {...register('terms')}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I have read and agree to the Terms & Conditions
          </label>
        </div>
        <p className="mt-2 text-sm text-red-600" id="terms-error">
          {errors.terms?.message}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="wallet"
            name="wallet"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            aria-invalid="true"
            aria-describedby="wallet-error"
            {...register('wallet')}
          />
          <label htmlFor="wallet" className="ml-2 block text-sm text-gray-900">
            I understand that a wallet will be created for me
          </label>
        </div>
        <p className="mt-2 text-sm text-red-600" id="wallet-error">
          {errors.wallet?.message}
        </p>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
