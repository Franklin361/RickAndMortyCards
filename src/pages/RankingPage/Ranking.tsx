import './style.css'
import { ItemTable } from './ItemTable';
import { AiOutlineFileImage, AiOutlineLike, AiOutlineTrophy, AiOutlineUser } from 'react-icons/ai';

export const Ranking = () => {
    return (
        <>
            <h2 className='title_page'>Clasificación de cards 📊 </h2>
            <table>
                <thead>
                    <tr className='cabecera'>
                        <th>
                            <div><span>#</span> <AiOutlineTrophy className='icon'/></div>
                        </th>
                        <th>
                            <div><span>Nombre</span> <AiOutlineUser className='icon'/></div>
                        </th>
                        <th>
                            <div><span>Imagen</span> <AiOutlineFileImage className='icon'/></div>
                        </th>
                        <th>
                            <div><span>Votos</span> <AiOutlineLike className='icon'/></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItemTable/>
                    <ItemTable/>
                    <ItemTable/>
                </tbody>
            </table>

        </ >
    )
}

export default Ranking;
