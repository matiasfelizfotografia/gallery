import React from 'react'
import Styles from "./Cover.module.css"

export const Cover = () => {
    return (
        <div className={Styles.cover_container}>
            <img className={Styles.img} src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?cs=srgb&dl=pexels-pixabay-235621.jpg&fm=jpg" alt="" />
            <h1>Name</h1>
            <p>Personas - Lugares - Cosas</p>
            
        </div>
    )
}
