import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Accueil from './components/Accueil/Accueil';
import Contact from './components/Contact/Contact';
import Realisations from './components/Realisations/Realisations';


function App() {
  return (
    <div className="app">
      <Header />
          <Switch>
              <Route exact path="/" component={Accueil} />
              <Route path="/Accueil" component={Accueil} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Realisations" component={Realisations} />
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
