import React,{useState,useEffect} from 'react'
import { Cover } from '../Components/cover/Cover'
import NavBarO from '../Components/navBar/NavBar'
import Carrousel from '../Components/carousel/Carousel'
import  Style  from './Home.module.css'
import ImagenServices from '../Services/ImagenServices'



export const Home = (props) => {
    window.scrollTo(0, 0)



   
    
    return (
        <div className={Style.container}>
            <div className={Style.carrousel}>
                <Carrousel imagenes={props.imagenesH} />
            </div>
            
        </div>
    )
}
