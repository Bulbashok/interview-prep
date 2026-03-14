import toast from 'react-hot-toast';

export const notify = {
  success: (text: string) => toast.success(text),
  error: (text: string) => toast.error(text),
};
