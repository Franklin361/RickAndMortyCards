
import { Card } from "../../components/CardItem/Card";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { InputSearch } from "../../components/InputSearch";
import { LayoutCards } from '../../components/LayoutCards';

import "./styles.css";
import { useEffect, useRef, useState } from 'react';
import { ResponseAPI } from '../../interfaces/responseApi';

export const HomePage = () => {

    const [data, setData] = useState<ResponseAPI>({} as ResponseAPI)
    const isMounted = useRef(true);

    useEffect(() => {
        () => isMounted.current = false
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${ Math.floor(Math.random()*42)+1 }`);
            const resData: ResponseAPI = await res.json();
            console.log(resData)
            setData(resData);
        };

        if (isMounted.current) fetchData();

    }, [])

    return (
        <div className="container_home">
            
            <InputSearch />

            {
                (data?.results && data.results.length !== 0) 
                    ? <LayoutCards data={data}/>
                    : null
            }

        </div>
    )
}

export default HomePage