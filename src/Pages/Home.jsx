import React from 'react'
import { Cover } from '../Components/cover/Cover'
import NavBarO from '../Components/navBar/NavBar'
import Carrousel from '../Components/carousel/Carousel'
import  Style  from './Home.module.css'
import image1 from '../Images/Home/1.jpg'
import image2 from '../Images/Home/2.jpg'
import image3 from '../Images/Home/3.jpg'


export const Home = () => {
    window.scrollTo(0, 0)
    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
    let images = []
    images = importAll(require.context('../Images/Home', true, /\.(png|jpe?g|svg)$/));

    const imagess = [image1,image2,image3];
    
       
       
    return (
        <div className={Style.container}>
            <div className={Style.navBar}>
                <NavBarO />
            </div>
            <div className={Style.carrousel}>
                <Carrousel images={imagess}/>
            </div>
            
        </div>
    )
}
