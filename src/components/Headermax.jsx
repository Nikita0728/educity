import React from 'react'
import Image from 'react-bootstrap/Image';
import dark_arrow from '../assets/edusity_assets/dark-arrow.png';
import './Styles.css'


export const Headermax = () => {
  return (
    <div className='body1 'id='home'>
        <div className='para'>
                 <h1> We ensure better education for better future.</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque dolorum sapiente voluptatum, veritatis obcaecati nihil. Nesciunt illo fugit id, laborum quia itaque error quaerat, perspiciatis voluptate ratione optio doloribus asperiores tempore fuga qui.
                 </p>
                 <div className='up-btn'>
                 <button className='btn-exp'>Explore More <Image src={dark_arrow} alt=' ' className='arrow'></Image></button>
                 </div>
                 </div>
    </div>
  )
}
