import { Loading } from './Loading/Loading';
import { Suspense } from 'react';
export const LazyCompont: React.FC = ({ children }) => {
    return (
        <Suspense fallback={<Loading width="100vw" height="100vh" />}>
            {children}
        </Suspense>
    )
};