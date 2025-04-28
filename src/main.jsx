import { createRoot } from 'react-dom/client';
import AppProvider from './contexts/AppContext';
import App from './App';
import './index.css'
const root = document.getElementById('root');


createRoot(root).render(
  <AppProvider>
    <App />
  </AppProvider>
);
