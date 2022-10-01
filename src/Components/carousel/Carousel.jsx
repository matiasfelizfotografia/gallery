import React,{useState,useEffect} from 'react'
import Slider from 'infinite-react-carousel';
import Styles from './Carrousel.module.css'
import dataHome from '../../Images/Home/home.json'
import ImagenServices from '../../Services/ImagenServices';


function Carousel() {
     const [imagenesV,setImagenesV] = useState([]);

      const [imagenesH,setImagenesH] = useState([]);

    const getImagenes = async (idH,idV) => new Promise (async (resolve) =>{
        const data = await ImagenServices.getImagenes(idV.toString())
        console.log(data)
        setImagenesV(data)
        const data2 = await ImagenServices.getImagenes(idH.toString())
        setImagenesH(data2)
        console.log(data)

    })
      useEffect(async () => {
   getImagenes(2,1)
  },[])
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
    if (imagenesH.length == 0 || imagenesV.length == 0)
        return null
    return (
        <div className={Styles.slider}>
            <div className={Styles.slider_content}>
                {
                 width < 600 && <Slider className={Styles.slider_content} {...settings}>{
                        imagenesV.map((im) =>{
                        
                            return <div className={Styles.slider_content_item} >
                            <img className = {Styles.image} src={im.url}  alt="Matias Feliz Fotografia"/>
                        </div>
                        }
                        
                        )}
                    </Slider>
                }
                {
                 width > 600 && <Slider className={Styles.slider_content} {...settings}>{
                        imagenesH.map((im) =>{
                        
                            return <div className={Styles.slider_content_item} >
                            <img className = {Styles.image} src={im.url}  alt="Matias Feliz Fotografia"/>
                        </div>
                        }
                        
                        )}
                    </Slider>
                }
             
            </div>
            
            
        </div>
    )
}

export default Carousel
