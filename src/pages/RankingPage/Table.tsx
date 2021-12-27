import { ResponseRanking } from '../../interfaces/responseSocket';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoadingImage } from '../../components/Loading/Loading';
import { memo } from 'react';
interface Props{
    ranking:ResponseRanking[]
}
export const TableRanking = ({ ranking }:Props) => {

    return (
        <>
        {
            ranking.map((rank, i) => (
                <div className='item_movil_rank' key={rank.uid}>
                    <p className='rank_movil'>{i + 1}</p>
                    <LazyLoadImage
                        placeholder={<LoadingImage />}
                        src={rank.image}
                        className="img_rank"
                        effect="opacity"
                    />
                    <p className='name_rank'>{rank.name}</p>
                    <p className='votes_movil'>
                        {
                            rank.likes !== 0 ? `+ ${rank.likes}` : rank.likes
                        }
                    </p>
                </div>
            ))
        }
        </>
    )
}
