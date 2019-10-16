import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Gma from '../images/Logos/GoodMorningAmerica.png'
import Forbes from '../images/Logos/Forbes.png'
import Fortune from '../images/Logos/Fortune.png'
import Bloomberg from '../images/Logos/bloomberg-logo.jpg'
import BusinessInsider from '../images/Logos/BusinessInsiderlogo.png'
import Ellen from '../images/Logos/Ellen2.png'
import USAToday from '../images/Logos/USAToday.png'
import WallStreet from '../images/Logos/WallStreet.png'
import Inc from '../images/Logos/Inc-logo.png'
import '../stylesheets/Carousel.scss'

function CarouselSlide(){
    return(
<Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="carousel-container"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={.5}
  swipeable
  transitionDuration={1000}
>
  <div className='carousel-imgs'>
      <img src={Gma} />
  </div>
  
  <div className='carousel-imgs'>
    <img src={Forbes} />
  </div>
  
  <div className='carousel-imgs'>
    <img src={Fortune} />
  </div>
  
  <div className='carousel-imgs'>
    <img src={Bloomberg} />
  </div>
  <div className='carousel-imgs'>
    <img src={BusinessInsider} />
  </div>
  <div className='carousel-imgs'>
    <img src={Ellen} />
  </div>
  <div className='carousel-imgs'>
    <img src={USAToday} />
  </div>
  <div className='carousel-imgs'>
    <img src={WallStreet} />
  </div>  
  <div className='carousel-imgs'>
    <img src={Inc} />
  </div>
</Carousel>
    )
}

export default CarouselSlide;