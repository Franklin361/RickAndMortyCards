import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./styles.css";
import { Result } from '../../interfaces/responseApi';
import { Episode } from '../../interfaces/responseEpisode';
import { Loading } from "../Loading/Loading";


export const Card = (props: Result) => {
    const [dataCardEpisode, setDataCardEpisode] = useState<Episode>();

    const { id, image, name, status, type, gender, origin, location, episode } = props

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
        <div className="item" id={id.toString()} >


            <div className="image_container">

                <LazyLoadImage
                    // placeholder={}
                    src={image}
                    className="image_card"
                    effect="blur"
                />

                <div className="btn_like_content">

                    <button className="btn_like web" >
                        <AiFillHeart className="icon" />
                    </button>
                    <span className="title_btn_like">Me gusta!</span>
                </div>
            </div>

            <div className="info_character">
                <h3 className="title_card">{name}</h3>

                <div className="details_character">
                    <div className="container_info_seco">
                        <p> Status: <span className={`response ${status.toLowerCase()}`}>{status}</span> </p>
                        <p> Gender: <span className="response">{gender}</span></p>
                    </div>
                    {
                        (type.length !== 0) && <p> Type: <span className="response">{type}</span></p>
                    }
                    <p> Origin: <span className="response">{ origin.name.length > 25 ? `${origin.name.slice(0,25)}...` : origin.name}</span></p>
                    <p> Location: <span className="response">{ location.name.length > 20 ? `${location.name.slice(0,23)}...` : location.name}</span></p>
                    <p> First seen in: <span className="response">{
                        (dataCardEpisode?.name) 
                        ?  dataCardEpisode.name.length > 25 
                            ? `${dataCardEpisode.name.slice(0,25)}...` 
                            : dataCardEpisode.name 
                        : ''
                    }</span></p>
                </div>

                <button className="movil" >

                    <AiFillHeart className="icon" />
                </button>
            </div>
        </div>
    )
}
