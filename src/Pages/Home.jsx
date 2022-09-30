import React from 'react'
import { Cover } from '../Components/cover/Cover'
import NavBarO from '../Components/navBar/NavBar'
import Carrousel from '../Components/carousel/Carousel'
import  Style  from './Home.module.css'



export const Home = () => {
    window.scrollTo(0, 0)
   
    return (
        <div className={Style.container}>
            <div className={Style.navBar}>
                <NavBarO />
            </div>
            <div className={Style.carrousel}>
                <Carrousel />
            </div>
            
        </div>
    )
}
