import { useCallback, useState } from 'react';
import io, { Socket } from 'socket.io-client';


export const useSocket = ( serverPath:string ) => {
    
    const [socket, setSocket] = useState<Socket>();

    const conectarSocket = useCallback(()=>{
        
        const token = localStorage.getItem('token');

        const socketTemp = io( serverPath, { 
            transports: ['websocket'], 
            autoConnect: true, 
            forceNew: true,
            query: {
                'x-token' : token
            } 
        })

        setSocket(socketTemp);

    },[serverPath]);


    const desconectarSocket = useCallback(()=>{
        socket?.disconnect();
    },[socket]);


    return {
        socket,
        conectarSocket,
        desconectarSocket
    }
}