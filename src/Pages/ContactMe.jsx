import React, { Component } from 'react'
import NavBarO from '../Components/navBar/NavBar'
import Styles from './ContactMe.module.css'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Footer } from '../Components/footer/Footer';
import map from '../Images/map.png';
import emailjs from 'emailjs-com'

export const ContactMe = () => {
    window.scrollTo(0, 0)

    const coords = {
        lat: 51.5258541,
        lng: -0.08040660000006028
      };
      const params = {v: '3.exp', key: 'AIzaSyATws37HqR7E9OEJCqajG--Qj0CynGiFkk'};

      const sendEmail = (e) =>{
          emailjs.sendForm('service_05499wp','template_1eau1gk',e.target,'user_6HfKLrrEcZm7tvNyGe4Mh')
      }

    return( 
            <div className={Styles.contactMeContainer}>
                <NavBarO />
                <div className={Styles.contact}>
                    <div className={Styles.form} >
                        <form onSubmit={sendEmail}>
                            <div className={Styles.formAttribute}> 
                                <label> Nombre </label><br/>
                                <input  name = 'name'/>
                            </div>
                            <div className={Styles.formAttribute}> 
                                <label> Mail </label><br/>
                                <input type = 'mail' name = 'mail' size="55"/>
                            </div>
                            <div className={Styles.formAttribute}> 
                                <label> Mensaje </label><br/>
                                <textarea name = 'message' rows="10" cols="40" />
                            </div>
                            <input type = 'submit' value = 'Enviar'/>
                        </form>
                        

                        
                    </div>
                    <div className={Styles.mediosContacto}>
                        <p>Tambien podes contactarme por:</p>
                        <p>Direccion : Cordoba 1747, local 46, primer piso</p>
                        <p>Telefono : +549 2235936659</p>
                        <p>Mail : matiasfeliz.fotografia@gmail.com</p>
                    </div>

                </div>
                <div className="map">
                    <Gmaps
                    width={'100%'}
                    height={'200px'}
                    lat={-37.99954307008053}
                    lng={-57.54726863394392}
                    zoom={16}
                    loadingMessage={'No se pudo cargar el mapa'}
                    params={params}
                    googleMapUrl ="https://maps.googleapis.com/maps/api/js?v=3.exp$key=$AIzaSyATws37HqR7E9OEJCqajG--Qj0CynGiFkk"
                    >
                    <Marker
                    lat= {-37.99954307008053}
                    lng={-57.54726863394392}
                    draggable={true}
                     />
   
              </Gmaps> 
                </div>
                
            <Footer />
            
            </div>
        )
    
}

export default ContactMe
