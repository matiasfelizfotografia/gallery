import Styles from "./Carpeta.module.css"


export const Carpeta = (props) =>{

    return(
    <div className={Styles.container}>
        
        <div className={Styles.carpetaContainer}>
            <img className={Styles.image} src="/Icons/folder.png" />
            <div className={Styles.name}>{props.name}</div> 
        </div>

    </div>
  
    )
}