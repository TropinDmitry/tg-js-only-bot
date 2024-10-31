import React from 'react';
import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      my web app
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
