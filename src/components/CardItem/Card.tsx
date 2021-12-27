import { useEffect, useState, useRef, useContext } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./styles.css";
import { Result } from '../../interfaces/responseApi';
import { Episode } from '../../interfaces/responseEpisode';
import { LoadingImage } from '../Loading/Loading';
import { showToast } from '../../helper/toast';
import { SocketContext } from '../../context/SocketContext';

interface ICardProps {
    data: Result;
    typeCard?: 'favorites';
}


export const Card = ({ data, typeCard }: ICardProps) => {

    const { doActionCard } = useContext(SocketContext)

    const controller = new AbortController();
    const signal = controller.signal
    const [dataCardEpisode, setDataCardEpisode] = useState<Episode | null>();

    const isFavPage = typeCard === 'favorites';

    const { id, image, name, status, type, gender, origin, location, episode, url, species } = data
    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            isMounted.current = false
            controller.abort();
            setDataCardEpisode(null);
        }

    }, []);

    useEffect(() => {

        const fetchDataEpisode = async () => {
            try {
                const res = await fetch(episode[0], { signal });
                const data: Episode = await res.json();
                setDataCardEpisode(data)
            } catch (e) {
                let error: Error = (e as Error);
                if (error.name == 'AbortError') console.log('Se ha cancelado la petición en la card');
                else throw error;
            }
        };

        if (episode[0] && isMounted.current) fetchDataEpisode();

    }, [])

    const handleLiked = (action: 'like' | 'dislike') => {
        doActionCard({ url, action, image, name });
    };

    return (
        <div className={`item ${isFavPage && 'item_favs'}`} id={id.toString()} >

            <div className={`image_container ${isFavPage && 'image_favs'}`}>

                <LazyLoadImage
                    placeholder={<LoadingImage />}
                    src={image}
                    className="image_card"
                    effect="opacity"
                />
                {
                    (!isFavPage)
                    &&
                    <div className="btn_like_content">
                        <button className="btn_like web" onClick={() => handleLiked('like')}>
                            <AiFillHeart className="icon" />
                        </button>
                        <span className="title_btn_like">Me gusta!</span>
                    </div>
                }
            </div>

            <div className="info_character">
                <h3 className="title_card">{ name.length > 15 && !isFavPage ? `${name.slice(0, 15)}...` : name}</h3>

                <div className="details_character">
                    <div className="container_info_seco">
                        <div>
                            <p> Status: </p>
                            <span className={`response ${status.toLowerCase()}`}>{status}</span>
                        </div>
                        <div>
                            <p> Gender: </p>
                            <span className="response">{gender}</span>
                        </div>
                    </div>

                    <p> Origin:
                        <span className="response">
                            {origin.name.length > 20 && !isFavPage ? ` ${origin.name.slice(0, 25)}...` : ` ${origin.name}`}
                        </span>
                    </p>
                    <p> Location:
                        <span className="response">
                            { location.name.length > 20 && !isFavPage ? ` ${location.name.slice(0, 23)}...` : ` ${location.name}`}
                        </span>
                    </p>
                    {
                        isFavPage
                         && <>
                            {
                                type && <p>Type: <span className="response">{ type }</span> </p>
                            }
                            {
                                species && <p>Species: <span className="response">{ species }</span> </p>
                            }
                         </>
                    }
                    <p> First seen in:
                        <span className="response">
                            {
                                (dataCardEpisode && dataCardEpisode.name.length >= 17 && !isFavPage)
                                        ? ` ${dataCardEpisode.name.slice(0, 17)}...`
                                        : ` ${dataCardEpisode?.name}`
                            }
                        </span>
                    </p>
                    

                    {
                        (isFavPage)
                        &&
                        <div className="delete_favs">
                            <button onClick={() => handleLiked('dislike')}>
                                Eliminar de Mis Favoritos
                                <AiOutlineDelete className="icon" />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
