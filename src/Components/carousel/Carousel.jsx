import React from 'react'
import Slider from 'infinite-react-carousel';
import Styles from './Carrousel.module.css'

function Carousel({images}) {
    const imagesName = [];
   
    return (
        <div className={Styles.slider}>
            <Slider className={Styles.slider_content}>{
                images.map((im) => <div className={Styles.slider_content_item} >
                                            <img className = {Styles.image} src={im} alt="Error al cargar la imagen"/>
                                        </div>
                )}
            </Slider>
            
        </div>
    )
}

export default Carousel
