import { useState } from 'react';
import { Link } from 'react-router-dom'
import Style from "./Dropdown.module.css"

const Dropdown = () => {

  const [showMenu,setShowMenu] = useState(false);

  
  const  showMenuu=(event)=> {
    event.preventDefault();
    
      setShowMenu(!showMenu);
  
  }

    return (
      <div className={Style.dropdownContainer}>
        <button className={Style.button} onClick={showMenuu}>
          Portfolio
        </button>
        
        

             {/*showMenu ||*/ <div className={Style.menu}>
                <Link to="/portfolio/retratos" className={Style.menuItem}> Retratos </Link>
                <Link to="/portfolio/estudio" className={Style.menuItem}> Estudio </Link>
                <Link to="/portfolio/exteriores" className={Style.menuItem}> Exteriores </Link>
                <Link to="/portfolio/marcas" className={Style.menuItem}> Marcas </Link>

              </div>} 
  
        
      </div>
    );
  }

export default Dropdown

