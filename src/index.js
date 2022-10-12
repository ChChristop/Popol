import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <div className='main'>
        <h1>포트폴리오(수정중)</h1>
        <h3></h3>
        <Routes>
          <Route exact path='/' element={<Events />} />
          <Route to='/history' element={<Navigate to='/about/history' />} />
          <Route to='/services' element={<Navigate to='/about/services' />} />
          <Route to='/location' element={<Navigate to='/about/location' />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
