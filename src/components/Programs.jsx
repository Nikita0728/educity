import React from 'react'
import Image from 'react-bootstrap/Image';
import img1 from '../assets/edusity_assets/program-1.png'
import img2 from '../assets/edusity_assets/program-2.png'
import img3 from '../assets/edusity_assets/program-3.png'
import img_icon_1 from '../assets/edusity_assets/program-icon-1.png'
import img_icon_2 from '../assets/edusity_assets/program-icon-2.png'
import img_icon_3 from '../assets/edusity_assets/program-icon-3.png'

export const Programs = () => {
  return (
    <div className='programs' id='prog' >
      <div className="title"> <h2 style={{mt:'40px'}} > OUR PROGRAMS</h2>
      </div> <hr/>
    <div className=' carousel' style={{mt:'40px'}}>
     <div className="bigdiv">
        <Image src={img1} className='img'></Image>
        <div className="caption">
        <Image src={img_icon_1} className='icon'/>
        <p> Graduation Degree</p>
        </div>
        </div>
      
 
        <div className='bigdiv'>
        <Image src={img2} className='img'/>
        <div className="caption">
        <Image src={img_icon_2} className='icon'/>
        <p> Masters Degree</p>
        </div>
        </div>

       
        <div className='bigdiv'>
        <Image src={img3} className='img'/>
        <div className="caption">
        <Image src={img_icon_3} className='icon'/>
        <p>Post Grad</p>
        </div>
        </div>

       
      
      
      
    </div>
    <hr/>
    </div>
    
  )
}
