import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Suspense fallback={<>Espere</>}>
            {children}
        </Suspense>
    )
};