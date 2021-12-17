
import { Card } from "../../components/CardItem/Card";

import profile from "../../assets/404_img.jpeg";

import "./styles.css";
import { AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";

export const HomePage = () => {


    const changeScale = (e:React.FocusEvent<HTMLInputElement, Element>) => {
        e.target?.parentElement?.parentElement?.classList.toggle('efecto')
    };

    return (
        <div className="container_home">
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

            <section className="section_search">
                <div className="input_container">
                    <AiOutlineSearch className="icon" />
                    <input 
                        type="text" 
                        placeholder="Busca un personaje" 
                        onFocus={changeScale}
                        onBlur={changeScale}
                    />
                </div>
            </section>


            <main className="grid_gallery">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </div>
    )
}

export default HomePage