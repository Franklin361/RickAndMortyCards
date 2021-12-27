import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { changeScale } from "../helper/changeScaleInput";
import { useFilterHome } from '../hooks/useFilterHome';
import { FilterContext } from '../context/FilterContext';


export const InputSearch = () => {

    const { onChange, estado, nombre, genero } = useContext(FilterContext);

    return (
        <>
            <section className="section_search">
                <div className="input_container">
                    <AiOutlineSearch className="icon" />
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        placeholder="Busca un personaje"
                        onFocus={changeScale}
                        onBlur={changeScale}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </div>
            </section>

            <section className="section_filter">

                <div className="container_select">
                    <label htmlFor="">Estado:</label>
                    <div className="select" >
                        <select 
                            onChange={onChange} 
                            value={estado}
                            name="estado" 
                        >
                            <option value=''>--Elija una opción--</option>
                            <option value="alive">Vivo</option>
                            <option value="dead">Muerto</option>
                            <option value="unknown">Desconocido</option>
                        </select>
                    </div>
                </div>

                <div className="container_select">
                    <label htmlFor="">Género:</label>
                    <div className="select">
                        <select 
                            onChange={onChange} 
                            value={genero}
                            name="genero" 
                        >
                            <option value=''> --Elija una opción--</option>
                            <option value="female">Femenino</option>
                            <option value="male">Masculino</option>
                            <option value="genderless">Sin género</option>
                            <option value="unknown">Desconocido</option>
                        </select>
                    </div>
                </div>

            </section>
        </>
    )
}
