import React from 'react';
import Header from '../images/KharmonHeader2.jpg'
import Header2 from '../images/laptop.jpg'
import Header3 from '../images/office.jpg'
import Header4 from '../images/ConferenceRoom.jpg'
import Header5 from '../images/OfficeColor.jpg'
import '../stylesheets/NameAndPhoto.scss'

function NameAndPhoto(){
    return (
        <div className='name-and-photo-container'>
            <h1 className='name'>KHAOS CONSULTING</h1>
            <img className='header-photo' src={Header5} alt='pen and paper' />
        </div>
    )
}

export default NameAndPhoto;
