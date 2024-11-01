import React from 'react';
import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Form, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';


function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
