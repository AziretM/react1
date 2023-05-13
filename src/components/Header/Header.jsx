import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <ul className='header__menu'>
                    <li className='li__main'>Home</li>
                    <li className='li__link'>About me</li>
                    <li className='li__link'>Skills</li>
                    <li className='li__link'>Portfolio</li>
                    <li className='li__link'>Contacts</li>
                </ul>
            </div>
        </header>
    
    )
}

export default Header;