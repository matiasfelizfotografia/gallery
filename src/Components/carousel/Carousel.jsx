import React from 'react'
import Slider from 'infinite-react-carousel';
import Styles from './Carrousel.module.css'
import dataHome from '../../Images/Home/home.json'


function Carousel() {
    
   
    return (
        <div className={Styles.slider}>
            <Slider className={Styles.slider_content}>{
                dataHome.map((im) =>{
                    let imageSource = "/gallery/Images/Home" + "/" + im.name
                    console.log(imageSource)
                    return  <div className={Styles.slider_content_item} >
                    <img className = {Styles.image} src={imageSource} alt="Error al cargar la imagen"/>
                </div>
                }
                
                )}
            </Slider>
            
        </div>
    )
}

export default Carousel
