import React from 'react'
import About from '../Components/about/About'
import { Footer } from '../Components/footer/Footer'
import NavBarO from '../Components/navBar/NavBar'
import Styles from "./AboutMe.module.css"

export const AboutMe = () => {
    window.scrollTo(0, 0)

    return (
        <div className={Styles.aboutMe_container}>

            <NavBarO />
            <div className={Styles.text}>
              <h1>Sobre mi</h1>
            </div> 

            <div className={Styles.aboutMe}>
                <About />
            </div>

            <Footer />         
            
        </div>  
    )
}
