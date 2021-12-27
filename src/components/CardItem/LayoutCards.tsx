
import { Card } from './Card';
import { ResponseAPI, Result } from '../../interfaces/responseApi';

interface IProps {
    data: Result[];
    page?: 'favorites'
}

export const LayoutCards = ({ data,page }: IProps) => {

    const isFavoritePge = page === 'favorites'
    const existData = data && data.length !== 0

    return (
        <main className={`${ isFavoritePge ? 'grid_gallery_favorites' :'grid_gallery'}`}>
            {
                (existData) && 
                data.map( result => (
                    <Card key={ result.id } data={result} typeCard={page}/>
                ))
            }
        </main>
    )
}
