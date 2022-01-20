import React from 'react'
import { Gallery } from '../Components/gallery/Gallery2'
import NavBar from '../Components/navBar/NavBar'
import Styles from './Portafolio.module.css'
import {Footer} from '../Components/footer/Footer'

function Portafolio(props) {    
    window.scrollTo(0, 0)
    return (
        <div className={Styles.portafolioContainer} >
            <NavBar />  
            <div className={Styles.text}>
              <h1>{props.name}</h1>
            </div>  
            <Gallery name={props.name}/>  
            <Footer />  
        </div>
    )
}

export default Portafolio
