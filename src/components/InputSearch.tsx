import {  AiOutlineSearch } from "react-icons/ai";

export const InputSearch = () => {

    const changeScale = (e:React.FocusEvent<HTMLInputElement, Element>) => {
        e.target?.parentElement?.parentElement?.classList.toggle('efecto')
    };

    return (
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
    )
}
