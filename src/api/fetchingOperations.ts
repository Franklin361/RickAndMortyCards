import { base_url } from "./config";
import { showToast } from '../helper/toast';

type TypeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const fetchWhitOutToken = async<T>(path: string, data: T, method: TypeMethod) => {

    try {
        const url = `${base_url}${path}`;
        let res: Response


        if (method === 'GET') {

            res = await fetch(url);

        } else {

            res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        if(res.status === 400 ){
            
            const data = await res.json();
            
            showToast({
                message: data.msg ?? data.message,
                type: 'error',
                autoClose: 5000
            });
        }

        return await res.json();

    } catch (error) {
        return null
    }

};


export const fetchWhitToken = async<T>(path: string, data: T, method: TypeMethod) => {

    const url = `${base_url}${path}`;

    const token = localStorage.getItem('token');

    if (!token) return;

    let res: Response;

    if (method === 'GET') {

        res = await fetch(url, {
            headers: {
                'x-token': token
            }
        });

    } else {

        res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })
    }

    return await res.json();
};