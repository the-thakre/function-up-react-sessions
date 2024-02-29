import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Navigation = () => {

    return (
        <div className='xi-navigation-wrapper'>
            <div className='link'><Link to={'/'}>Home</Link></div>
            <div className='link'><Link to={'/about'}>About Us</Link></div>
            <div className='link'><Link to={'/products'}>Products</Link></div>
            <div className='link'><Link to={'/contact-us'}>Contact Us</Link></div>
            <div className='link'><Link to={'/our-story'}>Our Story</Link></div>
        </div>
    )
}

export default Navigation