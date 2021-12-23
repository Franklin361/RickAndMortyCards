import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LoadingImage } from '../../components/Loading/Loading'

export const ItemTable = () => {
    
    return (
        <tr className='rank_td'>
            <td className='rank_td'><b className='rank'>1</b></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>
                <LazyLoadImage
                    placeholder={<LoadingImage />}
                    src={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                    className="image_card_ranking"
                    effect="opacity"
                />
            </td>
            <td className='rank'>+5</td>
        </tr>
    )
}
