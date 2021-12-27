import { toast } from 'react-toastify';

type PositionType = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface IToast {
    type: ToastType,
    autoClose?: number;
    toastId?:string;
    message:string;
    position?: PositionType;
}

export const showToast = ({ message, type,autoClose = 3000, toastId, position = 'bottom-center' }: IToast) => {
    
    toast[type]( message , {
        position,
        theme:'dark',
        autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: toastId ?? undefined,
        
    });
};