// components
import { Dialog } from 'components/common';

interface Props {
  avatarImage: File;
  onClose: () => void;
  onConfirm: () => void;
  figureName: string;
}
const CreateRoomDialog = ({
  avatarImage,
  onClose,
  onConfirm,
  figureName,
}: Props) => {
  return (
    <Dialog
      isFetching={false}
      onClose={onClose}
      title="Confirm Styled Avatar (Irreversible Action)"
      confirmLabel="Confirm"
      onConfirm={onConfirm}
      cancelLabel="Take me back!"
    >
      <div className="py-4">
        <div className="mb-4">
          <img src={URL.createObjectURL(avatarImage)} alt={figureName} />
        </div>
        <p className="block text-white">
          Clicking this button will confirm{' '}
          <span className="underline text-white">{figureName}</span> to be
          minted in your Sapien Nation Passport. (Note: This action is
          IRREVERSIBLE!)
        </p>
      </div>
    </Dialog>
  );
};
export default CreateRoomDialog;
