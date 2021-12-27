import './style.css';

interface ILoadingProps {
    width: string;
    height: string;
    background?:string;
    color?:string;
}

export const Loading = ({ width, height, background='rgb(36, 34, 34)', color='#f3f3f3' }: ILoadingProps) => {
    return (
        <div className="container_loading" style={{ width, height, background }}>
            <LoadingImage />
            <span style={{color}}>Cargando...</span>
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