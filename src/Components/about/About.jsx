import React, { Component } from 'react'
import Styles from './About.module.css'
import foto from '../../perfil.jpg'

export class About extends Component {
    render() {
        return (
        <div className={Styles.aboutMeContainer}>
            <img className={Styles.img} src={foto} alt="" />
            <div className={Styles.desc}>
                <h1>Let me tell you something about me </h1>
                <p>about me...</p>
            </div>
        </div>
        )
    }
}

export default About
