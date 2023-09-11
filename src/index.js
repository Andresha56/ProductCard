import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import APIContext from './component/context/APIContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIContext>
      <App />
    </APIContext>
  </React.StrictMode>
);


