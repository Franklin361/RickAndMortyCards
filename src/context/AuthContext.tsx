import { createContext, useCallback, useState } from 'react';
import { fetchWhitOutToken, fetchWhitToken } from '../api/fetchingOperations';
import { showToast } from '../helper/toast';
import { UserResponse } from '../interfaces/user';

interface IAuthState {
    handleLogin: (username: string, password: string) => Promise<void>;
    handleSignUp: (username: string, password: string, email: string) => Promise<void>;
    verificarToken: () => Promise<void>;
    handleLogout: () => void;
    auth: IInitialState;
    loading: boolean;
}

export const AuthContext = createContext({} as IAuthState);

interface IInitialState {
    uid: string | null,
    checking: boolean,
    logged: boolean,
    name: string | null,
}

const initialState: IInitialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
}


export const AuthProvider: React.FC = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (username: string, password: string, email: string) => {

        setLoading(true);

        const res: UserResponse = await fetchWhitOutToken('/api/auth/signup', { username, password, email }, 'POST');

        if (res?.user) {
            localStorage.setItem('token', res.token);
            setAuth({
                uid: res.user.uid,
                checking: false,
                logged: true,
                name: res.user.username
            })
            showToast({
                message: res.message,
                type: 'success',
                autoClose: 5000,
                toastId: res.token
            });
        }
        setLoading(false);

    };

    const handleLogin = async (username: string, password: string) => {

        setLoading(true);

        const res: UserResponse = await fetchWhitOutToken('/api/auth/login', { username, password }, 'POST');

        if (res?.user) {
            localStorage.setItem('token', res.token);
            setAuth({
                uid: res.user.uid,
                checking: false,
                logged: true,
                name: res.user.username
            })
            showToast({
                message: res.message,
                type: 'success',
                autoClose: 5000,
                toastId: res.token
            });
        }
        setLoading(false);

    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuthResetState();
    };

    const verificarToken = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setAuthResetState();
                return;
            }

            const res: UserResponse = await fetchWhitToken('/api/auth/renew', null, 'GET');

            if (res.user) {

                localStorage.setItem('token', res.token);

                setAuth({
                    uid: res.user.uid,
                    checking: false,
                    logged: true,
                    name: res.user.username
                });

            } else {
                setAuthResetState();
            }
        } catch (error) {
            console.log(error);
            setAuthResetState();
        }

    }, [])

    const setAuthResetState = () => {
        setAuth({
            uid: null,
            checking: false,
            logged: false,
            name: null,
        })
    };

    return (
        <AuthContext.Provider value={{
            auth,
            loading,
            handleLogin,
            handleLogout,
            handleSignUp,
            verificarToken
        }} >
            {children}
        </AuthContext.Provider>
    )
};
