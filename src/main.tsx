import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';

// Handle GitHub Pages SPA redirect
const redirectFromGitHubPages = () => {
  const redirectPath = localStorage.getItem('spa:path');
  if (redirectPath) {
    localStorage.removeItem('spa:path');
    window.history.replaceState(null, '', redirectPath);
  }
};

redirectFromGitHubPages();

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster position="top-right" richColors closeButton />
  </>
);
