import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Loading } from '../components/Loading/Loading';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';
import { LazyCompont } from '../components/LazyCompont';

const LoginPage = lazy(() => import("../pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPage/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RankingPage = lazy(() => import("../pages/RankingPage/Ranking"));
const MyFavoritesPage = lazy(() => import("../pages/MyFavoritesPage/MyFavorites"));

export const AppRouter = () => {
    
    return (
        <BrowserRouter>



            <Routes>

                <Route element={<PublicRoutes />}>
                    <Route path="login" element={<LazyCompont> <LoginPage />  </LazyCompont>} />
                    <Route path="sign-up" element={<LazyCompont> <RegisterPage />  </LazyCompont>} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route index element={<LazyCompont> <HomePage />  </LazyCompont>} />
                    <Route path="ranking" element={<LazyCompont> <RankingPage />  </LazyCompont>} />
                    <Route path="favorites" element={<LazyCompont> <MyFavoritesPage />  </LazyCompont>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}


const ProtectedRoutes: React.FC = () => {
    const isAuth = true;

    return (
        <>
            {
                isAuth
                    ? <><HeaderNav/><Outlet /></>
                    : <Navigate replace={true} to='/login' />
            }
        </>)
};

const PublicRoutes: React.FC = () => {
    const isAuth = true;

    return <>{isAuth ? <Navigate replace={true} to='/' /> : <Outlet />}</>
};
