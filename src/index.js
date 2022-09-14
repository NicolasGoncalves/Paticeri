import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter , Router , Route } from 'react-router-dom';
import LandingPage from './pages/landingpage'
import LoginAdm from './pages/loginAdm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Route path='./' element={<LandingPage/>}/>
        <Route path='./login-administrativo' element={<LoginAdm/>}/>
      </Router>
    </BrowserRouter>
  </React.StrictMode>
);


