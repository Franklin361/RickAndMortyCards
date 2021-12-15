import { AppRouter } from "./router/AppRouter"

const App = () => {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  )
}

const AppState: React.FC = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
};

export default App
