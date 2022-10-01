import React,{useState, useEffect} from 'react'
import { Gallery } from '../Components/gallery/Gallery2'
import NavBar from '../Components/navBar/NavBar'
import Styles from './Portafolio.module.css'
import {Footer} from '../Components/footer/Footer'
import { useParams } from 'react-router-dom'
import CarpetaServices from '../Services/CarpetaServices'

function Portafolio() {    
    window.scrollTo(0, 0)
    const { name } = useParams()
       return (
        <div className={Styles.portafolioContainer} >
            <div className={Styles.text}>
              <h1>{name}</h1>
            </div>  
            <Gallery  var="false"/>  
            <Footer />  
        </div>
    )
}

export default Portafolio
