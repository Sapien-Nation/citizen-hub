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
      confirmLabel="Confirm"
      onConfirm={onConfirm}
      cancelLabel="Take me back!"
    >
      <div className="flex flex-col items-center gap-3 mb-3">
        <h2 className="text-xl font-bold">Confirm Stylized Avatar</h2>
        <img src={URL.createObjectURL(avatarImage)} alt={figureName} />
        <p>Click confirm to mint your Sapien Nation Passport.</p>
        <p className="text-red-500">(Note: This action is IRREVERSIBLE!)</p>
      </div>
    </Dialog>
  );
};
export default CreateRoomDialog;
