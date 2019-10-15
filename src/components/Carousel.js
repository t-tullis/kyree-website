import React, { useState }from 'react';
import { Slide } from 'react-slideshow-image';
import Gma from '../images/Logos/GMA.jpg'
import Forbes from '../images/Logos/Forbes.png'
import Fortune from '../images/Logos/Fortune.png'
import Bloomberg from '../images/Logos/Bloomberg.png'
import BusinessInsider from '../images/Logos/GMA.jpg'
import Ellen from '../images/Logos/Ellen.jpg'
import USAToday from '../images/Logos/USAToday.png'
import WallStreet from '../images/Logos/WallStreet.png'
import Inc from '../images/Logos/INC.png'
import '../stylesheets/Carousel.scss'


// const [carouselData, setCarouselData] = useState({
//     image1: Gma,
//     image2: Forbes,
//     image3: Fortune,
//     image4: Bloomberg,
//     image5: BusinessInsider,
//     image6: Ellen,
//     image7: USAToday,
//     image8: WallStreet,
//     image9: Inc,
// })

const slideImages = [
    Gma,
    Forbes,
    Fortune,
    Bloomberg,
    BusinessInsider,
    Ellen,
    USAToday,
    WallStreet,
    Inc
  ];
   
  const properties = {
    duration: 5,
    transitionDuration: 5000,
    infinite: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

function Carousel(){
    return(
    <div className='carousel-container'>
        <Slide {...properties}>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
            </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
            </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
            </div>
        </div>
        </Slide>
    </div>
    )
}

export default Carousel;