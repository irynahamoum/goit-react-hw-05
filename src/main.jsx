import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, rgba(196, 191, 191, 0.56), rgba(220, 213, 213, 0.39))',
        }}
      >
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
