import { AiOutlineLogout } from "react-icons/ai";
import profile from "../assets/404_img.jpeg";

export const HeaderNav = () => {
    return (
        <header className="header_home">
            <div className="detail_user">
                <div className="img_profile">
                    <img src={profile} alt="" />
                </div>
                <span className="username">Franklin Martinez Lucas</span>
            </div>
            <button className="btn_logout">
                Salir
                <AiOutlineLogout className="icon" />
            </button>
        </header>
    )
}
