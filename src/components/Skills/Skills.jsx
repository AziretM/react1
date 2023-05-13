import React from 'react'
import ps from './../../Skills/Group.png'
import ai from './../../Skills/Group 2.png'
import ae from './../../Skills/Group (1).png'
import figma from './../../Skills/Group (2).png'
import star from './../../Skills/Star.png'


import './Skills.css'

const Skills = () => {
    return (
        <section className='skills'>
            <div className='skills__container container'>
                <div className='skills__text'>
                    <h2 className='skills__title'>Skills</h2>
                    <p className='skills__subtitle'>I work in such programs as</p>
                </div>
                <div className='skills__content'>
                    <div className='skills__block'>
                        <img src={ps} alt="" />
                        <p className='skills__app'>Adobe</p>
                        <p className='skills__app'>Photoshop</p>
                        <div className='skills__star'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className='skills__block'>
                        <img src={ai} alt="" />
                        <p className='skills__app'>Adobe</p>
                        <p className='skills__app'>Illustration</p>
                        <div className='skills__star'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className='skills__block'>
                        <img src={ae} alt="" />
                        <p className='skills__app'>Adobe</p>
                        <p className='skills__app'>After Effects</p>
                        <div className='skills__star'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className='skills__block'>
                        <img src={figma} alt="" />
                        <p className='skills__app'>Figma</p>
                        <div className='skills__star'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;