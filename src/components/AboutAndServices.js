import React from 'react'
import newspaperIcon from '../images/newspaper.png'
import likeIcon from '../images/like.png'
import archivesIcon from '../images/archives.png'
import CarouselSlide from './Carousel.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../stylesheets/AboutAndServices.scss'

function AboutAndServices(){
    return(
        <div>
            <CarouselSlide/>
        <div className='about-and-services-container'>
            <div className='about'>
            <h2>About</h2>
            <p>
                Khaos Consulting is a virtual consulting firm, representing tech, lifestyle, and small business clients from all over the country. We specialize in public and media relations, but offer a wide variety of services to suit your individual business needs.
            </p>
            <p>
                Founder Kyree Harmon has more than 8 years of experience as a communications and public relations professional, working with a diverse portfolio of entrepreneurs, National consumer brands, and global tech companies. This includes a mix of consulting work, agency, and in-house.
            </p>
            </div>
            <div className='services'>
                <h2>Services</h2>
                <ul>
                    <li><img className='icons' src={newspaperIcon} /> Media Relations</li>
                    <li><img className='icons' src={likeIcon} />Brand Management</li>
                    <li><img className='icons' src={archivesIcon} />Editorial</li>
                </ul>
            </div>
    </div>
    </div>
    )
}

export default AboutAndServices;