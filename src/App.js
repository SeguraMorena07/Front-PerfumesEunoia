import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ProductListings from './components/ProductListings';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      
      <main className="container my-5">

        <ProductListings />
        
      </main>
      
      {/* COMPONENTE DE PIE DE PÁGINA (Footer) */}

    </div>
  );
}

export default App;
