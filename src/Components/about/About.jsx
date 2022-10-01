import React, { Component,useState,useEffect } from 'react'
import Styles from './About.module.css'
import foto from '../../perfil.jpg'
import ImagenServices from '../../Services/ImagenServices'

export const About = ()  => {

    const [imagen,setImagene] = useState([]);
    const getImagenes = async (id) => new Promise (async (resolve) =>{
        const data = await ImagenServices.getImagenes(id)
        console.log(data)
        setImagene(data)
    })

    useEffect(() => {
        //if(id!= undefined)
        getImagenes(3)
    },[])

    if(imagen.length == 0)
    return null
        return (
        <div className={Styles.aboutMeContainer}>
            <img className={Styles.img} src={imagen[0].url} alt="Matias Feliz Fotografia" />
            <div className={Styles.desc}>
                <h1>Sobre mi </h1>
                <p>     Soy Matías Feliz, tengo 23 años y actualmente vivo en Mar del Plata. Amante
de los retratos y la luz natural, de conectar con el otro.</p>
                <p>Comencé en el mundo de la fotografía en el 2019. Desde ese momento nunca
más solté la cámara. Saqué fotos para marcas, modelos, desfiles de moda,
paisajes, retratos, foto-producto, gastronomía, boliches, en la playa, estilo
urbano.</p>
    <p>En el 2021 nació Matías Feliz Estudio de Fotografía. Estudio MF fue todo un
desafío y aprendizaje constante donde hoy sigo aprendiendo y
capacitándome.</p>
   <p> Soy un convencido de que cualquier persona, como vos y yo, puede hacerse
fotos y estar delante de cámara. Mi lema ante todo es que quien pase por mi
lente se sienta cómodo, a gusto y la pase bien. Porque cuando esto sucede, la
sesión de fotos fluye y se refleja en los resultados finales.
Me apasionan los nuevos desafíos y la previa a cada una de las sesiones de
fotos. Disfruto mucho cada uno de los shottings y poder conocer, conectar y
compartir lo que me apasiona con diferentes personas.</p>
   <p> Te invito a conocer un poco de mi arte…</p>
            </div>
        </div>
        )
    }


export default About
