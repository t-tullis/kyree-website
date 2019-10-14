import React from 'react'
import '../stylesheets/Footer.scss'

function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-bg'>
                <div className='contact'>
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <i class="fas fa-envelope fa-lg"></i>Kyree.Harmon@gmail.com
                        </li>
                        <li>
                            <i class="fas fa-phone fa-lg"></i>123-456-7890
                        </li>
                        <li>
                            <i class="fas fa-map-pin fa-lg"></i>Los Angeles, CA
                        </li>
                    </ul>
                </div>
                <div className='quick-links'>
                    <div className='footer-name-container'>
                        <div className='line1'></div>
                        <h2> Kyree Harmon </h2>
                        <div className='line2'></div>
                    </div>
                    <div className='social-media'>
                        <a href='#'> <i class="fab fa-twitter-square fa-3x"> </i></a>
                        <a href='#'> <i class="fab fa-instagram fa-3x"></i></a>
                        <a href='#'> <i class="fab fa-facebook-square fa-3x"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;