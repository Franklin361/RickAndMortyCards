import { useContext } from "react";
import { AiOutlineBarChart, AiOutlineHeart, AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import './style.css'
import { AuthContext } from '../../context/AuthContext';

import profile from "../../assets/avatar.jpg";

export const HeaderNav = () => {

    const { auth, handleLogout } = useContext(AuthContext);

    return (
        <header className="header_home">
            <div className="detail_user">
                <div className="img_profile">
                    <img src={profile} alt="" />
                </div>
                <span className="username">{ auth.name ?? 'unknow' }</span>
            </div>

            <div className="section_nav">

                <NavLink to='/' 
                    className={({ isActive }) => "link_nav" + (isActive ? " activated_link" : "")}
                >
                    <AiOutlineHome className="icon_nav"/>
                    <span className="title_nav">Home</span>
                </NavLink>

                <NavLink to='/favorites' 
                    className={({ isActive }) => "link_nav" + (isActive ? " activated_link" : "")}
                >
                    <AiOutlineHeart className="icon_nav"/>
                    <span className="title_nav">Mis favoritos</span>
                </NavLink>
                
                <NavLink to='/ranking' 
                    className={({ isActive }) => "link_nav" + (isActive ? " activated_link" : "")}
                >
                    <AiOutlineBarChart className="icon_nav"/>
                    <span className="title_nav">Ranking</span>
                </NavLink>
                

                <button className="btn_logout" onClick={handleLogout}>
                    <span className="title_nav">Salir</span>
                    <AiOutlineLogout className="icon" />
                </button>
            </div>
        </header>
    )
}
