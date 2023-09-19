import React,{useState, useEffect} from "react";
import { Carpeta } from "../Components/carpeta/Carpeta"
import CarpetaServices from "../Services/CarpetaServices"
import Styles from "./Admin.module.css"
import { Link } from "react-router-dom";
import ImagenServices from "../Services/ImagenServices";

export const Admin = () =>{

    const [carpetas, setCarpetas] = useState([]);

    useEffect( () =>{
        const fetchCarpetas = async () =>{
          const data = await CarpetaServices.getCarpetas()
          console.log(data)
          await setCarpetas(data)
        }
          fetchCarpetas()    
          console.log(carpetas)

      },[])

    const addCarpeta = async () =>{
        let name = window.prompt("Insert name of folder")
        let formData = new FormData();
        formData.append("nombre",name)
        await CarpetaServices.addCarpeta(formData)
        window.location.reload()
    }
    
    const delCarpeta = async (id) =>{
        const data = await ImagenServices.getImagenes(id)
        if(data.length == 0){
            if(window.confirm("Are you sure you want delete this folder?")){
                await CarpetaServices.delCarpeta(id)
                window.location.reload()
            }
        }
        else{
            if(window.confirm("ALERTA!!! ESTA CARPETA TIENE IMAGENES DENTRO. Esta seguro que desea borrarla??? Se borraran tambien todas las imagenes")){
                await CarpetaServices.delCarpeta(id)
                window.location.reload()
            }
        }
       
    }

    return(
        <div className={Styles.carpetasContainer}>
            <div className={Styles.folder}>
                <Link to={"/folder/home"} >
               <Carpeta name="Home" />
               </Link>

            </div>
            <div className={Styles.folder}>
                <Link to={"folder/" + 3}>
                    <Carpeta name={"Perfil"} />
                </Link>
            </div>
            {carpetas.map((carpeta) =>
            <div className={Styles.folder}>
                <Link to={"/folder/" + carpeta.id} >
                    <Carpeta name = {carpeta.name} />
                </Link>
                <img src="/Icons/delete.png" height="20em"  onClick={() =>delCarpeta(carpeta.id)}/>

            </div>
            )}

            <div>
                <img className={Styles.add} src="/Icons/add.png" width="40em" onClick={addCarpeta}/>
            </div>
        </div>
    )
}

export default Admin;