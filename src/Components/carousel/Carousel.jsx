import React,{useState,useEffect} from 'react'
import Slider from 'infinite-react-carousel';
import Styles from './Carrousel.module.css'
import dataHome from '../../Images/Home/home.json'


function Carousel() {

        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => {
            window.removeEventListener("resize", handleResize);
            };
        });
    
        const settings =  {
            adaptiveHeight:true
          };
   
    return (
        <div className={Styles.slider}>
            <div className={Styles.slider_content}>
                <Slider className={Styles.slider_content} {...settings}>{
                    dataHome.map((im) =>{
                        let imageSource
                        if (width < 600)
                            imageSource = "Images/Home/Vertical" + "/" + im.name 
                        else
                            imageSource = "/Images/Home/Horizontal" + "/" + im.name 
                        return  <div className={Styles.slider_content_item} >
                        <img className = {Styles.image} src= {imageSource}  alt="Matias Feliz Fotografia"/>
                    </div>
                    }
                    
                    )}
                </Slider>
            </div>
            
            
        </div>
    )
}

export default Carousel
