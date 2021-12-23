
import { Card } from './CardItem/Card';
import { ResponseAPI } from '../interfaces/responseApi';

interface IProps {
    data: ResponseAPI
}

export const LayoutCards = ({ data }: IProps) => {
    return (
        <main className="grid_gallery">
            {
                (data?.results && data.results.length !== 0)
                && data.results.map(result => (
                    <Card key={ result.id } {...result} />
                ))
            }
        </main>
    )
}
