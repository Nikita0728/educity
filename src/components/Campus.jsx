import React from 'react'
import './Styles.css'
import g_1 from '../assets/edusity_assets/gallery-1.png'
import g_2 from '../assets/edusity_assets/gallery-2.png'
import g_3 from '../assets/edusity_assets/gallery-3.png'
import g_4 from '../assets/edusity_assets/gallery-4.png' 
import white_arrow from '../assets/edusity_assets/white-arrow.png'

export const Campus = () => {
  return (
        <div className=" cphotos" id='camp'>
    <div>
        <div className='new div-right'  >
     <h3>Gallery</h3>
     <div><h2> Campus Photos</h2></div>
     </div>
     <div className='campus'>
       <div className='gallery'>  
        <img src={g_1} alt=''></img>
        <img src={g_2} alt=''/>

        <img src={g_3} alt=''/>
        <img src={g_4} alt=''/>

     
        </div>
        <button className='see-more-button'>See More here <img src={white_arrow}></img></button>
            </div>
            </div>
     </div>
  )
}
