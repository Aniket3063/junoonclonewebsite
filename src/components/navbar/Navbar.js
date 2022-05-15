import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky-navbar'>
            <div className='sticky-navdiv'>
                <div className="sticky-logo">
                    <img src="../logo.png" alt='photo' />
                </div>
                <div className="sticky-nav-option flex-all-center">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Timeline</a></li>
                        <li><a href='#'>Collections</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className="sticky-socials flex-all-center">
                    <ul>
                        <li>
                            <a href='#'><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href='#'><i class="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar