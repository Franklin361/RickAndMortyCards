import { ToastType } from "../helper/toast";

export interface ResponseSocket {
    message?: string;
    favorites: string[];
    type?: ToastType
}

export interface ResponseRanking {
    likes: number;
    image:string;
    name:string;
    url: string;
    uid:string;
}