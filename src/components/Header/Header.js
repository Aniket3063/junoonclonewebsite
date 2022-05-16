import React, { useState } from 'react'
import './Header.css'

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (

        <div className='bg-slide'>
            <nav className='wide-nav transparent'>
                <div className='navdiv'>
                    <div className="logo">
                        <img src="https://junoonnsut.com/style/images/junoon-white.png" alt='photo' />
                    </div>
                    <div className={isMobile ? "nav-links-mobile  flex-all-center" : "nav-option flex-all-center"}
                    onClick={() => setIsMobile(true)}>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Instagram</a></li>
                            <li><a href='#'>Timeline</a></li>
                            <li><a href='#'>Collections</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="socials flex-all-center">
                        <ul>
                            <li>
                                <a href='#'><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href='#'><i class="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className='mobile-menu-icon-div flex-all-center'>
                        <button className='mobile-menu-icon' 
                        onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? (<i className='fa fa-times'></i>) : (<i className='fa fa-bars'></i>)}
                        </button>
                    </div>
                </div>
            </nav>
            <div className='intro'>
                <h1>JUNOON</h1>
                <h3>The Photography Club of NSUT</h3>
                <div className='btn smart-btn'>
                    <button> <a href='#'> SEE OUR WORKS </a></button>
                </div>
            </div>
        </div>
    )
}

export default Header