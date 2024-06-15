import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../app/globals.css'
import './i18n';
import { UserContextProvider } from './components/UserContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  // </React.StrictMode>,
)
