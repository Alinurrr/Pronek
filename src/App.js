import React, { useEffect } from 'react';
import Router from './router';
import './App.css'
function App() {

  useEffect(() => {
    document.title = "Pronek";
  }, [])

  return (
    <div>

      <Router />

    </div>
  );
}

export default App;
