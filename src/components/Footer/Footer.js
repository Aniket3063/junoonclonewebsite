import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer flex-all-center'>
      <div className='flex-all-center'>
        <div className='logo'>
          <img src="https://junoonnsut.com/style/images/junoon-white.png" alt='photo' />
          <p>Built & Design by Aniket-Kumar | IT-1.</p>
        </div>
        <div className="socials flex-all-center footer-socials">
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

export default Footer