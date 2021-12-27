import { AppRouter } from "./router/AppRouter"

import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

import { AuthProvider } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { DataCardsProvider } from './context/DataCardsContext';
import { useEffect } from 'react';

const App = () => {
  
  return (
    <AppState>
      <AppRouter />
      <ToastContainer limit={1} />
    </AppState>
  )
}

const AppState: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DataCardsProvider>
        <SocketProvider>
          {children}
        </SocketProvider>
      </DataCardsProvider>
    </AuthProvider>
  )
};

export default App
