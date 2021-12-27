import { createContext } from 'react';
import { useFilterHome } from '../hooks/useFilterHome';

interface FilterState {
    handleReset: () => void
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nombre: string;
    estado: string;
    genero: string;
}

export const FilterContext = createContext({} as FilterState);



export const FilterProvider:React.FC = ({ children }) => {
    
    const { onChange, nombre, estado, genero, handleReset } = useFilterHome();

    return <FilterContext.Provider value={{
        handleReset,
        onChange,
        nombre, estado, genero
    }}>
        { children }
    </FilterContext.Provider>
};