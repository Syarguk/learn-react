// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Form from './pages/Form';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
