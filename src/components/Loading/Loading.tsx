import './style.css';

interface ILoadingProps {
    width: string;
    height: string;
    background?:string;
}

export const Loading = ({ width, height, background='rgb(36, 34, 34)' }: ILoadingProps) => {
    return (
        <div className="container_loading" style={{ width, height, background }}>
            <LoadingImage />
            <span>Cargando...</span>
        </div>
    )
}


export const LoadingImage = () => {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    )
}