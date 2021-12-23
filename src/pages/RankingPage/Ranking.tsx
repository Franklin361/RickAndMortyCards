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

            <div className='container_rank_movil'>
                <div className='item_movil_rank'>
                    <p>#</p>
                    <p>Imagen</p>
                    <p>Nombre</p>
                    <p>Votos</p>
                </div>

                <div className='item_movil_rank'>
                    <p className='rank_movil'>1</p>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='votes_movil'>1200</p>
                </div>
                <div className='item_movil_rank'>
                    <p className='rank_movil'>1</p>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='votes_movil'>1200</p>
                </div>
                <div className='item_movil_rank'>
                    <p className='rank_movil'>1</p>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='votes_movil'>1200</p>
                </div>
                <div className='item_movil_rank'>
                    <p className='rank_movil'>1</p>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='votes_movil'>1200</p>
                </div>
                

            </div>

        </ >
    )
}

export default Ranking;
