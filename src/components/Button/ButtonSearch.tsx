import { AiOutlineFilter } from "react-icons/ai"

import './style.css'
export const ButtonSearch = () => {
    return (
        <>
            <button className="btn_filter">
                <AiOutlineFilter className="icon" />
            </button>
            <span className="title_btn">Realizar Filtros</span>
        </>
    )
}
