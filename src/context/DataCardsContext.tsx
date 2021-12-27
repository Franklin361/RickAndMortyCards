import { createContext, useState } from 'react';
import { ResponseSocket, ResponseRanking } from '../interfaces/responseSocket';
import { showToast } from '../helper/toast';

interface DataCardsState {
    favorites: string[];
    ranking: ResponseRanking[];
    updateFavorites:  ({ favorites, message }: ResponseSocket) => void;
    updateRanking: (ranking: ResponseRanking[]) => void
}

export const DataCardsContext = createContext({} as DataCardsState);


export const DataCardsProvider: React.FC = ({ children }) => {

    const [favorites, setFavorites] = useState<string[]>([])
    const [ranking, setRanking] = useState<ResponseRanking[]>([]);


    const updateFavorites = ({ favorites, message = '', type }:ResponseSocket) => {
        
        if(favorites){
            if(favorites.length !== 0) setFavorites(favorites);
        }

        if(message.length !== 0 && type ) {
            if(type === 'success') showToast({message, type, autoClose: 1100, position: 'bottom-left'});
            else showToast({message, type, autoClose: 5100, position: 'bottom-left'});
        }
    };

    const updateRanking = (ranking: ResponseRanking[]) => {
        if(ranking.length !== 0) setRanking(ranking)
        else setRanking([])  
    };
    

    return <DataCardsContext.Provider
        value={{
            favorites,
            ranking,
            updateFavorites,
            updateRanking
        }}
    >
        {children}
    </DataCardsContext.Provider>
};