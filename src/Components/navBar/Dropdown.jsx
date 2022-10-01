import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Style from "./Dropdown.module.css"
import CarpetaServices from '../../Services/CarpetaServices';
import { render } from 'react-dom';


const Dropdown = (props) => {



  
   return (
      <div className={Style.dropdownContainer}>
        <button className={Style.button} >
          Portfolio
        </button>
        <div className={Style.menu}>

          {
            props.carpetas.map((carpeta) =>{
                return (carpeta.name != "Vertical" && carpeta.name != "Horizontal" && carpeta.name != "Perfil") && <Link to={"/portfolio/" + carpeta.name + "/" + carpeta.id} className={Style.menuItem}> {carpeta.name} </Link>

            })
          }
          </div>
        
        
      </div>
    );
  }

export default Dropdown

