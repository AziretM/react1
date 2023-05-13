import React from 'react'
import './Aboutme.css'

const Aboutme = () => {
    return (
        <section className='about'>
            <div className='about__container container'>
                <h2 className='about__title'>About me</h2>
                <div className='about__info'>
                <p className='about__subtitle'>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</p>
                <p className='about__subtitle'>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</p>
                <p className='about__subtitle'>Ready to implement excellent projects with wonderful people.</p>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;