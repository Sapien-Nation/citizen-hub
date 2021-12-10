import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

// api
import { checkLink } from 'api/passport';

// context
import { useToast } from 'context/toast';

interface FormValues {
  linkID: string;
}

const PassportLinkForm = () => {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      linkID: '',
    },
  });

  const toast = useToast();
  const { push } = useRouter();

  const onSubmit = async ({ linkID }: FormValues) => {
    try {
      await checkLink(linkID);

      push(`/passport/${linkID}`);
    } catch (err) {
      toast({ message: err });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 sm:space-y-5">
        <div>
          <div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Enter a Passport Link ID to generate your passport
            </p>
          </div>

          <div className="mt-2 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    {window.location.href}/
                  </span>
                  <input
                    type="text"
                    name="linkID"
                    id="linkID"
                    required
                    autoComplete="username"
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    {...register('linkID')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check
          </button>
        </div>
      </div>
    </form>
  );
};

export default PassportLinkForm;
