import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

// api
import { register as registerAction } from 'api/authentication';

// components
import {
  Checkbox,
  PasswordInput,
  TextInput,
  TextInputLabel,
} from 'components/common';

// hooks
import { useAuth } from 'context/user';
import { useToast } from 'context/toast';

interface RegisterFormValues {
  email: string;
  firstName: string;
  password: string;
  confirm: string;
  username: string;
  lastName: string;
  terms: boolean;
  wallet: boolean;
}

const RegisterForm = () => {
  const methods = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      firstName: '',
      password: '',
      confirm: '',
      username: '',
      lastName: '',
      terms: false,
      wallet: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = methods;

  const toast = useToast();
  const { query } = useRouter();
  const { setSession } = useAuth();

  const onSubmit = async ({
    email,
    firstName,
    lastName,
    password,
    confirm,
    username,
  }: RegisterFormValues) => {
    try {
      if (confirm !== password) {
        setError('password', { message: 'Passwords must match' });
        setError(
          'confirm',
          { message: 'Passwords must match' },
          { shouldFocus: true }
        );
        return false;
      }

      const response = await registerAction({
        firstName,
        lastName,
        email,
        password,
        username,
        client: window?.navigator.userAgent,
        redirect: '/',
      });

      setSession(response, (query.redirect as string) || null);
    } catch (error) {
      toast({
        message: error || 'Please contact support',
      });
    }
  };

  const termsError = errors.terms?.message;
  const passwordError = errors.password?.message;
  const walletError = errors.wallet?.message;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <TextInputLabel
            label="Email"
            name="email"
            error={errors.email?.message}
          />
          <div className="mt-1">
            <TextInput
              aria-invalid={Boolean(errors.email?.message)}
              aria-describedby="email-error"
              autoComplete="email"
              name="email"
              maxLength={100}
              placeholder="email@example.com"
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              rules={{
                validate: {
                  required: (value) => value.length > 0 || 'is required',
                  email: (value) =>
                    /^\b[\w\.-]+@[\w\.-]+\.\w{1,15}\b$/.test(value) ||
                    'is not valid',
                },
              }}
            />
          </div>
        </div>

        <div>
          <TextInputLabel
            label="Username"
            name="username"
            error={errors.username?.message}
          />
          <div className="mt-1">
            <TextInput
              name="username"
              maxLength={30}
              autoComplete="username"
              placeholder="johndoe"
              rules={{
                maxLength: { value: 30, message: 'is to long' },
                required: { value: true, message: 'is required' },
                validate: (value) =>
                  !/[-|\.|_]+|[-|\.|_]{2,2}/.test(value) || 'is invalid',
              }}
              replaceWhiteSpace
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <TextInputLabel
              label="First Name"
              name="firstName"
              error={errors.firstName?.message}
            />
            <div className="mt-1">
              <TextInput
                name="firstName"
                maxLength={50}
                autoComplete="firstName"
                placeholder="John"
                pattern={/^[a-zA-Z\s]*$/}
                rules={{
                  validate: {
                    required: (value) => value.length > 0 || 'is required',
                  },
                }}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <TextInputLabel
              label="Last Name"
              name="lastName"
              error={errors.lastName?.message}
            />
            <div className="mt-1">
              <TextInput
                name="lastName"
                maxLength={50}
                autoComplete="lastName"
                placeholder="Doe"
                pattern={/^[a-zA-Z\s]*$/}
                rules={{
                  validate: {
                    required: (value) => value.length > 0 || 'is required',
                  },
                }}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>
        </div> */}

        <div className="space-y-1">
          <TextInputLabel
            label="Password"
            name="password"
            error={errors.password?.message}
          />
          <div className="mt-1">
            <PasswordInput
              name="password"
              control={control}
              validate={(value) => value.length > 0 || 'is required'}
              inputProps={{
                'aria-invalid': Boolean(passwordError),
                'aria-describedby': `password-error`,
              }}
            />
          </div>
        </div>

        <div className="space-y-1">
          <TextInputLabel
            label="Confirm Password"
            name="confirm"
            error={errors.confirm?.message}
          />
          <div className="mt-1">
            <PasswordInput
              name="confirm"
              shouldValidate={false}
              inputProps={{
                'aria-invalid': Boolean(passwordError),
                'aria-describedby': `password-error`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              name="terms"
              className="h-4 w-4 text-sapien focus:ring-purple-500 border-gray-600 rounded"
              aria-invalid="true"
              aria-describedby="terms-error"
              label={
                <label
                  htmlFor="terms"
                  className={`ml-2 block text-xs ${
                    termsError && 'text-red-500'
                  }`}
                  id={termsError ? 'terms-error' : ''}
                >
                  I have read and agree to the{' '}
                  <Link passHref href="/terms">
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms & Conditions
                    </a>
                  </Link>{' '}
                  {termsError}
                </label>
              }
            />
          </div>
        </div>

        {/* <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              name="wallet"
              className="h-4 w-4 text-sapien focus:ring-purple-500 border-gray-600 rounded"
              aria-invalid="true"
              aria-describedby="wallet-error"
              label={
                <label
                  htmlFor="wallet"
                  className={`ml-2 block text-xs ${
                    walletError && 'text-red-500'
                  }`}
                  id={walletError ? 'wallet-error' : ''}
                >
                  I understand that a wallet will be created for me{' '}
                  {walletError}
                </label>
              }
            />
          </div>
        </div> */}

        <div className="mt-8">
          <button
            type="submit"
            className={`${
              isSubmitting ? 'cursor-not-allowed disabled:opacity-75' : ''
            }
              w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            disabled={isSubmitting}
          >
            Sign up
          </button>
          <div className="mt-8 text-center">
            <p className="text-sm inline">Already have an account?</p>
            <Link
              href={
                query.redirect ? `/login?redirect=${query.redirect}` : '/login'
              }
            >
              <a className="font-medium text-sm text-sapien hover:text-purple-500">
                &nbsp;login
              </a>
            </Link>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
