import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from '../components/Loading/Loading';

const LoginPage = lazy(() => import("../pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPage/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <LazyCompont> <HomePage/>  </LazyCompont> } />
                <Route path="login" element={ <LazyCompont> <LoginPage/>  </LazyCompont> } />
                <Route path="sign-up" element={ <LazyCompont> <RegisterPage/>  </LazyCompont> } />
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