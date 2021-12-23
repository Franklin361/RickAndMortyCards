
import { Card } from './CardItem/Card';
import { ResponseAPI } from '../interfaces/responseApi';

interface IProps {
    data: ResponseAPI;
    page?: 'favorites'
}

export const LayoutCards = ({ data,page }: IProps) => {

    const isFavoritePge = page === 'favorites'

    return (
        <main className={`${ isFavoritePge ? 'grid_gallery_favorites' :'grid_gallery'}`}>
            {
                (data?.results && data.results.length !== 0)
                    && 
                data.results.map( result => (
                    <Card key={ result.id } data={result} typeCard={page}/>
                ))
            }
        </main>
    )
}
