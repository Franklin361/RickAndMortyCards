import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from './useDebounce';


const initalState = {
    nombre: '',
    genero: '',
    estado: ''
}

export const useFilterHome = () => {
    const [form, setForm] = useState(initalState);

    let [searchParams, setSearchParams] = useSearchParams();  
    
    const { nombre, estado, genero } = form
    
    const debouncedSearchTerm = useDebounce(nombre, 1000);

    const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
         setForm({
             ...form,
             [e.target.name]: e.target.value
         })
    };

    const handleReset = () => {
        
        setForm({
            nombre: '',
            genero: '',
            estado: ''
        });
    };
    
    useEffect(() => {

        const data = {
            ...(estado) && { status : estado},
            ...(genero) && { gender : genero},
            ...(debouncedSearchTerm) && { name: debouncedSearchTerm},
        }

        setSearchParams(data); 
        
    }, [estado, genero, debouncedSearchTerm]);


    return {
        ...form,
        onChange,
        handleReset
    }
}
