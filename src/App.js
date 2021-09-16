import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Accueil from './components/Accueil/Accueil';


function App() {
  return (
    <div className="app">
      <Header />

      <Route path="/" component={Accueil} />
      <Route path="/About" component={About} />
      <Footer />
    </div>
  );
}

export default App;
