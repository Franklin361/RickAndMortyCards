import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDebounce } from './useDebounce';

export const useFilterHome = () => {
    const [form, setForm] = useState({
        nombre: '',
        genero: '',
        estado: ''
    });

    const { nombre, estado, genero } = form
    
    const debouncedSearchTerm = useDebounce(nombre, 1000);

    const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
         setForm({
             ...form,
             [e.target.name]: e.target.value
         })
    };

    
    useEffect(() => {
        if(estado || genero){
            console.log({estado, genero});
        }
    }, [estado, genero]);


    useEffect(() => {
        if(debouncedSearchTerm){
            console.log({debouncedSearchTerm})
        }
    }, [debouncedSearchTerm])

    return {
        ...form,
        onChange
    }
}
