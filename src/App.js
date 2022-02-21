import './App.css';
import { Home } from './Pages/Home';
import { AboutMe } from './Pages/AboutMe';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContactMe from './Pages/ContactMe';
import Portafolio from './Pages/Portafolio';
import React from 'react';


function App() {
  React.useEffect(() => {
    document.title = "MatiasFelizFotografia"
  }, [])
  return (
      
      <Switch>
        <Route exact path='/'>
        <Redirect exact from="/" to="home" />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/aboutMe'>
          <AboutMe />
        </Route>
        <Route exact path='/portfolio/retratos'>
          <Portafolio name="Retratos"/>
        </Route>
        <Route exact path='/portfolio/marcas'>
          <Portafolio name="Marcas"/>
        </Route>
        <Route exact path='/portfolio/exteriores'>
          <Portafolio name="Exteriores"/>
        </Route>
        <Route exact path='/portfolio/estudio'>
          <Portafolio name="Estudio"/>
        </Route>
        <Route exact path='/contactMe'>
          <ContactMe />
        </Route>
      </Switch>
    
  );
}

export default App;