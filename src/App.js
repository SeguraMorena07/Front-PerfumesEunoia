import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ProductListings from './components/ProductListings';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      
      <main className="container my-5">

        <ProductListings />

      </main>
      
      <FooterComponent />
      
    </div>
  );
}

export default App;
