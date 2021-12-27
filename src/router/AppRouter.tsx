import { lazy, useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Loading } from '../components/Loading/Loading';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';
import { LazyCompont } from '../components/LazyCompont';
import { AuthContext } from '../context/AuthContext';
import { FilterProvider } from '../context/FilterContext';

const LoginPage = lazy(() => import("../pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPage/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RankingPage = lazy(() => import("../pages/RankingPage/Ranking"));
const MyFavoritesPage = lazy(() => import("../pages/MyFavoritesPage/MyFavorites"));

export const AppRouter = () => {

    const { auth,verificarToken } = useContext(AuthContext)

    useEffect(() => {
        verificarToken();
    }, [])


    if(auth.checking){
        return <Loading width="100vw" height="100vh" />
    }
    
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<PublicRoutes />}>
                    <Route path="login" element={<LazyCompont> <LoginPage />  </LazyCompont>} />
                    <Route path="sign-up" element={<LazyCompont> <RegisterPage />  </LazyCompont>} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route index element={ <LazyCompont> <FilterProvider> <HomePage /> </FilterProvider> </LazyCompont>} />
                    <Route path="ranking" element={<LazyCompont> <RankingPage />  </LazyCompont>} />
                    <Route path="favorites" element={<LazyCompont> <MyFavoritesPage />  </LazyCompont>} />
                </Route>

                <Route path="/*" element={<Navigate to='/' replace={true} />}/>

            </Routes>
        </BrowserRouter>
    )
}


const ProtectedRoutes: React.FC = () => {
    const { auth } = useContext(AuthContext)

    return (
        <>
            {
                auth.logged
                    ? <><HeaderNav/><Outlet /></>
                    : <Navigate replace={true} to='/login' />
            }
        </>)
};

const PublicRoutes: React.FC = () => {
    const { auth } = useContext(AuthContext)

    return <>{ auth.logged ? <Navigate replace={true} to='/' /> : <Outlet />}</>
};
