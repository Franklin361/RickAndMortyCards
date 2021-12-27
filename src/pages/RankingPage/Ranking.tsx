import './style.css'
import { AiOutlineFileImage, AiOutlineLike, AiOutlineTrophy, AiOutlineUser } from 'react-icons/ai';
import { useEffect, useContext } from 'react';
import { DataCardsContext } from '../../context/DataCardsContext';
import { TableRanking } from './Table';

export const Ranking = () => {

    const { ranking } = useContext(DataCardsContext);
    
    useEffect(() => {
        const html = document.querySelector("html")
        if (html) html.scrollTop = 0;
    }, []);
    
    return (
        <>
            <h2 className='title_page'>Clasificación de cards (Top 5)  📊 </h2>

            <div className='container_rank_movil'>
                <div className='item_movil_rank_header'>
                    <p>
                        <span className='text_movil'>#</span>
                        <AiOutlineTrophy className='icon_rank' />
                    </p>
                    <p>
                        <span className='text_movil'>Imagen</span>
                        <AiOutlineFileImage className='icon_rank' />
                    </p>
                    <p className='name_header'>
                        <span className='text_movil name_header'>Nombre</span>
                        <AiOutlineUser className='icon_rank name_header' />
                    </p>
                    <p>
                        <span className='text_movil'>Votos</span>
                        <AiOutlineLike className='icon_rank' />
                    </p>
                </div>

                <TableRanking ranking={ranking} />

            </div>

        </ >
    )
}

export default Ranking;
