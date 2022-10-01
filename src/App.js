import './App.css';
import { Home } from './Pages/Home';
import { AboutMe } from './Pages/AboutMe';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContactMe from './Pages/ContactMe';
import Portafolio from './Pages/Portafolio';
import React from 'react';
import NavBar from './Components/navBar/NavBar';
import {useState,useEffect} from 'react'
import CarpetaServices from './Services/CarpetaServices';
import ImagenServices from './Services/ImagenServices';


function App() {
  
    const [carpetas, setCarpetas] = useState([]);

    const getCarpetas = async () => new Promise(async (resolve) =>{
      const  data  =await CarpetaServices.getCarpetas()
      // console.log(data)
       setCarpetas(data)
    })

 
  useEffect(async () => {
   getCarpetas()
  },[])
 
  React.useEffect(() => {
    document.title = "MatiasFelizFotografia"
  }, [])


  return (<div>
    <NavBar carpetas={carpetas} /> 
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
          <Route exact path='/portfolio/:name/:id'>
            <Portafolio />
          </Route>
          <Route exact path='/contactMe'>
            <ContactMe />
          </Route>
      </Switch>
  </div>
   
    
  );
}

export default App;