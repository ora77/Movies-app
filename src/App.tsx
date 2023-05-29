
import React from 'react';
import './App.css';
import { Header } from './shared/Header';
import { HomePage } from "./pages/homePage/HomePage";
import { Details } from './pages/homePage/components/Details';


function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

