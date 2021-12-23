
import { Card } from './Card';
import { ResponseAPI } from '../../interfaces/responseApi';

interface IProps {
    data: ResponseAPI;
    page?: 'favorites'
}

export const LayoutCards = ({ data,page }: IProps) => {

    const isFavoritePge = page === 'favorites'
    const existData = data?.results && data.results.length !== 0

    return (
        <main className={`${ isFavoritePge ? 'grid_gallery_favorites' :'grid_gallery'}`}>
            {
                (existData) && 
                data.results.map( result => (
                    <Card key={ result.id } data={result} typeCard={page}/>
                ))
            }
        </main>
    )
}
