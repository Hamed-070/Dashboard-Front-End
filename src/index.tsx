import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
require('./index.css') ; 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
       <App />
    </BrowserRouter>
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> another
  </React.StrictMode>
);
