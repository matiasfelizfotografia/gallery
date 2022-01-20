import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Style from "./NavBar.module.css"
import Dropdown from "./Dropdown"
import logo from "../../Images/logo.png"
import { useState } from 'react'
import { useEffect } from 'react'
import menu from "../../Images/menu.png"


const NavBar = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");
    const [toggleMenu,setToglleMenu] = useState(false);
    const [screenWidth,setScreenidth] = useState(window.innerWidth)

    const toggleNav = () =>{
        setToglleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth);
        
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    })


    return (
        <nav className={ Style.navBar_container}>
            
            <img className={Style.image} src={logo}/>
            <h1 className={Style.title}>Matias Feliz Fotografia</h1>
            {(toggleMenu || screenWidth > 500) &&  <ul className={ Style.nav}>
                <li className={Style.menuItem}><Link to="/"  className={Style.link}> Inicio </Link></li>
                <li className={Style.menuItem}><Dropdown className={Style.link}/></li>
                <li className={Style.menuItem}><Link to="/aboutMe" className={Style.link}> Sobre mi </Link></li>
                <li className={Style.menuItem}><Link to="/contactMe" className={Style.link}> Contacto </Link></li>
            </ul>}
           
            <button onClick={toggleNav} className={Style.btn}><img className={Style.menuLogo} src={menu} /></button>
        </nav>
    )
}

export default NavBar
