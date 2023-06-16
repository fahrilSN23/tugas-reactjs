import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beranda from './Components/Beranda';
import About from './Components/About';
import Contact from './Components/Contact';
import Category from './Components/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }>
          <Route path='home' element={ <Beranda /> } />
          <Route path='about' element={ <About /> } />
          <Route path='contact' element={ <Contact /> } />
          <Route path='category/:label' element={ <Category /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
