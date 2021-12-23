import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./styles.css";
import { Result } from '../../interfaces/responseApi';
import { Episode } from '../../interfaces/responseEpisode';
import { LoadingImage } from '../Loading/Loading';

interface ICardProps {
    data: Result;
    typeCard?: 'favorites';
}

export const Card = ({ data, typeCard }: ICardProps) => {
    const [dataCardEpisode, setDataCardEpisode] = useState<Episode>();

    const isFavPage = typeCard === 'favorites';

    const { id, image, name, status, type, gender, origin, location, episode } = data

    useEffect(() => {

        const fetchDataEpisode = async () => {
            const res = await fetch(episode[0]);
            const data: Episode = await res.json();
            setDataCardEpisode(data)
        };

        if (episode[0]) {
            fetchDataEpisode()
        }

    }, [])

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
                        <button className="btn_like web" >
                            <AiFillHeart className="icon" />
                        </button>
                        <span className="title_btn_like">Me gusta!</span>
                    </div>
                }
            </div>

            <div className="info_character">
                <h3 className="title_card">{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h3>

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

                    <p> Origin: <span className="response">{origin.name.length > 25 ? `${origin.name.slice(0, 25)}...` : origin.name}</span></p>
                    <p> Location: <span className="response">{location.name.length > 20 ? `${location.name.slice(0, 23)}...` : location.name}</span></p>
                    <p> First seen in: <span className="response">{
                        (dataCardEpisode?.name)
                            ? dataCardEpisode.name.length >= 20
                                ? `${dataCardEpisode.name.slice(0, 20)}...`
                                : dataCardEpisode.name
                            : ''
                    }</span></p>

                    {
                        (isFavPage)
                        &&
                        <div className="delete_favs">
                            <button>
                            Eliminar de Mis Favoritos
                            <AiOutlineDelete className="icon"/>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
