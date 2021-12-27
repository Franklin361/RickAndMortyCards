
import { Card } from "../../components/CardItem/Card";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { InputSearch } from "../../components/InputSearch";
import { LayoutCards } from '../../components/CardItem/LayoutCards';

import "./styles.css";
import { useContext, useEffect, useRef, useState } from 'react';
import { ResponseAPI } from '../../interfaces/responseApi';
import { AuthContext } from '../../context/AuthContext';
import { useSearchParams } from 'react-router-dom';
import { showToast } from "../../helper/toast";
import { FilterContext } from '../../context/FilterContext';
import { Loading } from "../../components/Loading/Loading";
import { AiOutlineCloseCircle } from "react-icons/ai";



export const HomePage = () => {

    const [searchParams] = useSearchParams();
    const { handleReset, nombre, estado, genero } = useContext(FilterContext);

    const [data, setData] = useState<ResponseAPI | null>(null)
    const isMounted = useRef(true);
    const [loading, setLoading] = useState(true);

    const controller = new AbortController();
    const signal = controller.signal

    useEffect(() => {

        return () => {
            isMounted.current = false
            controller.abort();
            setData(null);
        }

    }, []);

    useEffect(() => {
        handleInitCards()
        const html = document.querySelector("html")
        if(html){
            html.scrollTop = 0;
        }
      }, [])

    useEffect(() => {
        
        let name = searchParams.getAll('name').toString().trim();
        let gender = searchParams.getAll('gender').toString().trim();
        let status = searchParams.getAll('status').toString().trim();

        if (name || gender || status) {

            const url = `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}&status=${status}`;

            const fetchData = async () => {
                try {
                    setLoading(true);
                    const res = await fetch(url);

                    const jsonData = await res.json();
                    if (res.ok && res.status !== 404) {
                        setData(jsonData);
                    }
                    else {
                        showToast({ message: 'No se encontraron resultados', type: 'error', autoClose: 5000, position: 'bottom-right' });
                        setData(null);
                    }

                } catch (error) {
                    console.log(error)
                    setData(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }

    }, [searchParams])

    

    const handleInitCards = async () => {
        setLoading(true);

        if (nombre || genero || estado) handleReset();

        try {
            console.log(123)
            const url = `https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 42) + 1}`;
            const res = await fetch(url, { signal });
            const resData: ResponseAPI = await res.json();
            setData(resData);
        } catch (e) {
            let error: Error = (e as Error);
            if (error.name == 'AbortError') console.log('Se ha cancelado la petición');
            else throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container_home">

            <InputSearch />

            {
                (loading) ? <Loading width="100%" height="100%" background="transparent" />
                    : (data?.results && data.results.length !== 0)
                        ? <LayoutCards data={data.results} />
                        : <div className='no_results'>
                            <button onClick={handleInitCards}>
                                Limpiar Filtro
                                <AiOutlineCloseCircle className="icon"/>
                            </button>
                        </div>
            }

        </div>
    )
}

export default HomePage