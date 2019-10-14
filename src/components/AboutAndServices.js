import React from 'react'
import newspaperIcon from '../images/newspaper.png'
import likeIcon from '../images/like.png'
import archivesIcon from '../images/archives.png'
import '../stylesheets/AboutAndServices.scss'

function AboutAndServices(){
    return(
        <div className='about-and-services-container'>
            <div className='about'>
            <h2>About</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet tellus cras. Eu facilisis sed odio morbi quis commodo odio aenean sed. Est ultricies integer quis auctor. Odio eu feugiat pretium nibh ipsum consequat nisl. Egestas maecenas pharetra convallis posuere morbi leo urna. Senectus et netus et malesuada fames ac turpis egestas sed. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Egestas dui id ornare arcu odio ut sem nulla pharetra. Egestas dui id ornare arcu odio ut sem nulla pharetra. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
            
            Amet nulla facilisi morbi tempus. Lacus laoreet non curabitur gravida arcu. Amet est placerat in egestas erat imperdiet. Aliquet eget sit amet tellus cras. Senectus et netus et malesuada fames ac turpis egestas. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eu consequat ac felis donec et odio. Etiam erat velit scelerisque in dictum. Facilisis magna etiam tempor orci. Auctor urna nunc id cursus. Cursus eget nunc scelerisque viverra. Quis imperdiet massa tincidunt nunc. Vitae auctor eu augue ut lectus arcu bibendum. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Suspendisse ultrices gravida dictum fusce ut. Bibendum arcu vitae elementum curabitur vitae nunc. Sit amet nisl purus in mollis.
            </p>
            </div>
            <div className='services'>
                <h2>Services</h2>
                <ul>
                    <li><img className='icons' src={newspaperIcon} /> Service 1</li>
                    <li><img className='icons' src={likeIcon} />Service 2</li>
                    <li><img className='icons' src={archivesIcon} />Service 3</li>
                </ul>
            </div>
    </div>
    )
}

export default AboutAndServices;