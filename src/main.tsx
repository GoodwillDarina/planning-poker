/// <reference types='vite-plugin-svgr/client' />

import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
)
