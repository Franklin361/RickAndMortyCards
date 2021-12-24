import { toast } from 'react-toastify';

interface IToast {
    type: 'success' | 'error',
    autoClose?: number;
    toastId?:string;
    message:string;
}

export const showToast = ({ message, type,autoClose = 3000, toastId }: IToast) => {
    
    toast[type]( message , {
        position: "top-right",
        theme:'dark',
        autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: toastId ?? undefined
    });
};