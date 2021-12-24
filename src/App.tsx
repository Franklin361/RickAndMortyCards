import { AppRouter } from "./router/AppRouter"

import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AppState>
      <AppRouter />
      <ToastContainer limit={1}/>
    </AppState>
  )
}

const AppState: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
};

export default App
