import React from 'react';
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
