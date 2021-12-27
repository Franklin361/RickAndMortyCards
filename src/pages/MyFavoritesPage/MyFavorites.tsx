
import { useEffect, useRef, useState, useContext } from 'react';
import { Card } from '../../components/CardItem/Card';
import './style.css'
import { ResponseAPI, Result } from '../../interfaces/responseApi';
import { LayoutCards } from '../../components/CardItem/LayoutCards';
import { DataCardsContext } from '../../context/DataCardsContext';



export const MyFavorites = () => {

  const { favorites } = useContext(DataCardsContext);

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<Result[] | null>([])
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      setData(null);
      setLoading(false);
    }
  }, []);


  useEffect(() => {

    const controller = new AbortController();

    const fetching = async () => {

      try {
        if(!favorites) return;
        if (favorites.length !== 0) {
          
          setLoading(true);
          let fetchCards = favorites.map(url => fetch(url, { signal: controller.signal }));

          let results = await Promise.all(fetchCards);

          let cards: Result[] = [];

          for (const result of results) {

            const res: Result = await result.json();
            cards = [...cards, res]
          }

          setData(cards.reverse())
        } else {
          setData([])
        }
      } catch (e) {
        
        let error: Error = (e as Error);
        console.log(error.message);

      }finally{
        setLoading(false);
      }

    };

    if (isMounted.current) fetching();

    return () => {
      controller.abort();
    }

  }, [favorites])


  return (
    <div>
      <h2 className='title_page'>Mis tarjetas favoritas 💚 </h2>
      {
        loading 
        ? <p>Cargando ...</p>
        : (data && data.length !== 0)
          ? <LayoutCards data={data} page='favorites' />
          : <p>No hay Favoritos</p>
      }
    </div>
  )
}
export default MyFavorites;