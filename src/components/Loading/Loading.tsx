import './style.css';

interface ILoadingProps {
    width:string;
    height:string;
}

export const Loading = ({ width, height }:ILoadingProps) => {
    return (
        <div className="container_loading" style={{ width, height }}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <span>Cargando...</span>
        </div>
    )
}
