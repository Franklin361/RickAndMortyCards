import { createContext, useContext, useEffect } from 'react';
import { base_url } from '../api/config';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './AuthContext';
import { DataCardsContext } from './DataCardsContext';
import { ResponseSocket, ResponseRanking } from '../interfaces/responseSocket';

interface IParameters {
    url:string;
    action: 'like' | 'dislike';
    image:string; 
    name:string;
}

interface SocketState {
    doActionCard: ({ url, action,image, name }: IParameters) => void
}

export const SocketContext = createContext({} as SocketState);

const server = base_url;

export const SocketProvider:React.FC = ({children}) => {
    
    const { socket ,conectarSocket,desconectarSocket } = useSocket(server);
    const { auth  } = useContext(AuthContext);
    const { updateFavorites, updateRanking } = useContext(DataCardsContext) 

    useEffect(() => {

        if(auth.logged) conectarSocket();

    }, [auth]);

    useEffect(() => {
        
        if(!auth.logged) desconectarSocket();

    }, [auth]);


    useEffect(() => {
        socket?.on('favorites', ( favorites: string[] )=>{
            updateFavorites({favorites});  
        })
    }, [socket]);

    
    useEffect(() => {
        socket?.on('ranking-cards', ( ranking:ResponseRanking[] )=>{
            updateRanking(ranking)
        })
    }, [socket])
    
   
    const doActionCard = ({url, action, image, name}:IParameters) => {

        socket?.emit('action_card', { url, image, name, action }, 
            ({ favorites, message, type }:ResponseSocket )=>{

            updateFavorites({favorites, message, type});
        });
    }


    return <SocketContext.Provider 
        value={{
            doActionCard
        }}
    >
        { children }
    </SocketContext.Provider>
};