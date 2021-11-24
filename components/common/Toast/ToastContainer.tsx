import Toast from './Toast';
import { useToastStateContext } from 'context/toast';

export default function ToastContainer() {
  const { toasts } = useToastStateContext();

  return (
    <div className="absolute bottom-5 right-5 ">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}
