import React from 'react'
import img from './../../About/BSPP2266.png'
import './About.css'

const About = () => {
    return (
        <section className='item'>
            <div className='item__container container'>
                <div className='item__info'>
                    <h2 className='item__name'>Aziret Mukanbaev</h2>
                    <p className='item__subtitle'>frontend developer 16 years old, Bishkek</p>
                    <p className='item__language'>RU <span className='info__span'>| ENG</span></p>
                </div>
                <img className='img' src={img} alt="" />
            </div>
        </section>
    )
}

export default About;