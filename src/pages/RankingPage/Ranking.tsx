import './style.css'
import { AiOutlineFileImage, AiOutlineLike, AiOutlineTrophy, AiOutlineUser } from 'react-icons/ai';
import { useEffect, useContext, useState } from 'react';
import { DataCardsContext } from '../../context/DataCardsContext';
import { Result } from '../../interfaces/responseApi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoadingImage } from '../../components/Loading/Loading';

export const Ranking = () => {

    const { ranking } = useContext(DataCardsContext);
    
    useEffect(() => {
        const html = document.querySelector("html")
        if (html) {
            console.log('object')
            html.scrollTop = 0;
        }
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

                {
                    ranking.map((rank, i) => (
                        <div className='item_movil_rank' key={rank.uid}>
                            <p className='rank_movil'>{i + 1}</p>
                            <LazyLoadImage
                                placeholder={<LoadingImage />}
                                src={rank.image}
                                className="img_rank"
                                effect="opacity"
                            />
                            <p className='name_rank'>{rank.name}</p>
                            <p className='votes_movil'>
                                {
                                    rank.likes !== 0 ? `+ ${rank.likes}` : rank.likes
                                }
                            </p>
                        </div>
                    ))
                }
            </div>

        </ >
    )
}

export default Ranking;
