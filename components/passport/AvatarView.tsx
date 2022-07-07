import { useState } from 'react';

// api
import { createPassport } from 'api/passport/reserve';

// context
import { useToast } from 'context/toast';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';
import { ConfirmDialog } from '.';

enum Dialog {
  Confirm,
}
interface Props {
  avatarImage: any;
  figureName: string;
  passportId: string;
  isManual: boolean;
  onBack: () => void;
  setView: (view: PassportViews) => void;
  setStyledAvatar: (styledAvatar: string) => void;
}

const HistoricalFiguresSearch = ({
  avatarImage,
  figureName,
  isManual,
  passportId,
  onBack,
  setView,
  setStyledAvatar,
}: Props) => {
  const [dialog, setDialog] = useState<Dialog | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const toast = useToast();

  const handleCreatePassport = async () => {
    setDialog(null);
    setIsFetching(true);
    try {
      const formData = new FormData();

      formData.append('passportId', passportId);
      formData.append('figureName', figureName);
      formData.append('isManual', JSON.stringify(isManual));
      formData.append('image', avatarImage); // Keep image at last

      const { isPending, avatarURL } = await createPassport(formData);

      if (isPending) {
        setView(PassportViews.Pending);
      } else {
        setStyledAvatar(avatarURL);
        setView(PassportViews.Success);
      }
    } catch (error) {
      toast({
        message: error,
      });
    }
    setIsFetching(false);
  };

  return (
    <>
      <div className="px-4 xl:px-0">
        <h1 className="mt-3 mx-auto text-md font-light py-4 text-white sm:text-xl md:mt-5">
          We’ve created a stylized version of the portrait you provided.
        </h1>
        <h2 className="text-lg text-white">
          By clicking “Generate Passport” we will mint an NFT with this image.
        </h2>
      </div>
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
          <div className="flex justify-center">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <img src={URL.createObjectURL(avatarImage)} alt={figureName} />
          </div>
          <div className="mt-12 sticky bottom-10 flex flex-row justify-center items-center gap-8">
            <button
              disabled={isFetching}
              type="button"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                isFetching ? 'animate-pulse' : ''
              }`}
              onClick={onBack}
            >
              Try Again
            </button>
            <button
              disabled={isFetching}
              type="button"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                isFetching ? 'animate-pulse' : ''
              }`}
              onClick={() => setDialog(Dialog.Confirm)}
            >
              {isFetching ? 'Generating Passport...' : 'Generate Passport'}
            </button>
          </div>
        </div>
      </main>

      {/* Dialogs */}
      {dialog === Dialog.Confirm && (
        <ConfirmDialog
          avatarImage={avatarImage}
          onClose={() => {
            setDialog(null);
            onBack();
          }}
          onConfirm={handleCreatePassport}
          figureName={figureName}
        />
      )}
    </>
  );
};

export default HistoricalFiguresSearch;
