import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from '../components/Loading/Loading';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';

const LoginPage = lazy(() => import("../pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPage/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RankingPage = lazy(() => import("../pages/RankingPage/Ranking"));
const MyFavoritesPage = lazy(() => import("../pages/MyFavoritesPage/MyFavorites"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <HeaderNav />

            <Routes>
                <Route index element={<LazyCompont> <HomePage />  </LazyCompont>} />
                <Route path="login" element={<LazyCompont> <LoginPage />  </LazyCompont>} />
                <Route path="sign-up" element={<LazyCompont> <RegisterPage />  </LazyCompont>} />
                <Route path="ranking" element={<LazyCompont> <RankingPage />  </LazyCompont>} />
                <Route path="favorites" element={<LazyCompont> <MyFavoritesPage />  </LazyCompont>} />
            </Routes>
        </BrowserRouter>
    )
}


const LazyCompont: React.FC = ({ children }) => {
    return (
        <Suspense fallback={<Loading width="100vw" height="100vh" />}>
            {children}
        </Suspense>
    )
};