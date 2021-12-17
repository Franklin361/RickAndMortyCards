import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "./styles.css";

export const Card = () => {

    const [liked, setLiked] = useState(()=>false);

    return (
        <div className="item">
            <img src="https://rickandmortyapi.com/api/character/avatar/43.jpeg" />
            <div className="info_character">
                {/* <span>id: 43</span> */}
                <h3 className="title_card">PC Basketball Player</h3>
                <div className="details_character">
                    <p> Status: <span className="response dead">Dead</span> </p>
                    <p> Type: <span className="response">Human</span></p>
                    <p> gender: <span className="response">Male</span></p>
                    <p> origin: <span className="response">unknown</span></p>
                    <p> Location: <span className="response">Citadel of Ricks</span></p>
                    <p> First seen in: <span className="response">The Ricklantis Mixup</span></p>
                </div>
                <button className="btn_like" onClick={()=>setLiked(!liked)}>
                    {
                        !liked 
                            ? <AiOutlineHeart className="icon"/>
                            : <AiFillHeart className="icon icon_fill"/>
                    }
                    
                </button>
            </div>
        </div>
    )
}
