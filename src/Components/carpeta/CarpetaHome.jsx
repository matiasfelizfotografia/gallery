import { Carpeta } from "./Carpeta"
import { Link } from "react-router-dom";


export const CarpetaHome = () =>{
    return(
        <div>
            <Link to={"/folder/2"} >
            <Carpeta name="Horizontal" />

            </Link>
            <Link to={"/folder/1"} >
            <Carpeta name="Vertical />" />
            </Link>
           
        </div>
 
    )
}