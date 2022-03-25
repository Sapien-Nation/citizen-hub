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
      title="Confirm Styled Avatar (irreversible action)"
      confirmLabel="Confirm, create Avatar"
      onConfirm={onConfirm}
      cancelLabel="Try another"
    >
      <div className="py-4">
        <div className="mb-4">
          <img src={URL.createObjectURL(avatarImage)} alt={figureName} />
        </div>
        <p className="block text-white">
          By clicking we are going to generate an styled avatar for your pick{' '}
          <span className="underline text-white">{figureName}</span>
          Confirm, this actions is irreversible
        </p>
      </div>
    </Dialog>
  );
};
export default CreateRoomDialog;
