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
                            <i class="fas fa-envelope fa-lg"></i>info@khaosconsulting.com 
                        </li>
                        <li>
                            <i class="fas fa-phone fa-lg"></i>(818) 588-6429
                        </li>
                        <li>
                            <i class="fas fa-map-pin fa-lg"></i>Los Angeles, CA
                        </li>
                    </ul>
                </div>
                <div className='quick-links'>
                    <div className='footer-name-container'>
                        <div className='line1'></div>
                        <h2> Khaos Consulting</h2>
                        <div className='line2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;