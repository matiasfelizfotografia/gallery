import React from 'react'
import Styles from './Gallery.module.css'
import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import dataExteriores from '../../Images/Exteriores/exteriores.json'
import dataMarcas from '../../Images/Pasarela/pasarela.json'
import dataRetratos from '../../Images/Retratos/retratos.json'
import dataEstudio from '../../Images/Estudio/estudio.json'
import ImagenService from "../../Services/ImagenServices"
import { useParams } from 'react-router-dom';





export const Gallery = (props) => {
    
    const [imagenes,setImagenes] = useState([]);
    const { id } = useParams()
    const getImagenes = async (id) => new Promise (async (resolve) =>{
        const data = await ImagenService.getImagenes(id)
        console.log(data)
        setImagenes(data)
    })

    useEffect(() => {
        console.log(id)
        //if(id!= undefined)
        getImagenes(id.toString())
    },[id])





       

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
                {imagenes.map((im) =>{
                    return  <div className={Styles.pics} onClick = { () => getImage(im.url)}>
                        <img className = {Styles.image} src={im.url} alt="no carga"/>
                    </div>
                })
                }



            </div>
           
        </div>
        </>
    )
}
