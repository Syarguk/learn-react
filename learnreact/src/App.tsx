// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FormPage from './pages/FormPage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
