import React from 'react'
import Styles from './Gallery.module.css'
import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import dataExteriores from '../../Images/Exteriores/exteriores.json'
import dataMarcas from '../../Images/Marcas/marcas.json'
import dataRetratos from '../../Images/Retratos/retratos.json'
import dataEstudio from '../../Images/Estudio/estudio.json'





export const Gallery = (props) => {

       let imagesPath
       let data
       if (props.name === "Retratos"){
        imagesPath = "Retratos"
        data = dataRetratos


       }
       if (props.name === "Marcas"){
        imagesPath = "Marcas"
        data = dataMarcas


       }
       if (props.name === "Exteriores"){
        imagesPath = "Exteriores"
        data = dataExteriores

       }

       if (props.name === "Estudio"){
        imagesPath = "Estudio"
        data = dataEstudio

       }





       

        const [model,setModel] = useState(false);
        const [tempImgSrc,setTempImgSrc] = useState('');
        const getImage = (imageSource) => {
            setTempImgSrc(imageSource)
            if (window.innerWidth > 980)
                setModel(true);
    
       }
  


       

    return (
        <>
        <div className={model ? Styles.open : Styles.model}>
            <img src={tempImgSrc} alt=""/>
            <CloseIcon onClick={() => setModel(false) } />
        </div>
        <div className = {Styles.galleryContainer}>
            <div className = {Styles.imagess}>
                {data.map((d) => {
                    let imageSource = "/gallery/Images/" + imagesPath + "/" + d.name
                    return  <div className={Styles.pics} onClick = { () => getImage(imageSource)}>
                        <img className = {Styles.image} src={imageSource} alt="no carga"/>
                    </div>
                })}



            </div>
           
        </div>
        </>
    )
}
