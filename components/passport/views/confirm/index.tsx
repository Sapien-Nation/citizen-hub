// types
import type { ISOString } from 'tools/types/common';

interface Props {
  reservedFigure: string | null;
  expiresAt: ISOString | null;
  onConfirm: () => void;
}

const Confirm = (_: Props) => {
  return (
    <h1>
      TODO Confirm for this view, we need to show a message like you have
      reserver ... and we will reserve it till xxxx/xxx/xx please click on the
      button to confirm
    </h1>
  );
};

export default Confirm;
