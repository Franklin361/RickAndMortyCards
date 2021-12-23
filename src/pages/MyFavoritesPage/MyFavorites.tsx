
import { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/CardItem/Card';
import './style.css'
import { ResponseAPI } from '../../interfaces/responseApi';
import { LayoutCards } from '../../components/LayoutCards';

export const MyFavorites = () => {

  const [data, setData] = useState<ResponseAPI>({} as ResponseAPI)
  const isMounted = useRef(true);

  useEffect(() => {
    () => isMounted.current = false
  }, []);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=4`);
      const resData: ResponseAPI = await res.json();
      console.log(resData)
      setData(resData);
    };

    if (isMounted.current) fetchData();

  }, [])


  return (
    <div>
      <h2 className='title_page'>Mis tarjetas favoritas 💚 </h2>
      {
        (data?.results && data.results.length !== 0)
          ? <LayoutCards data={data} page='favorites'/>
          : null
      }
    </div>
  )
}
export default MyFavorites;