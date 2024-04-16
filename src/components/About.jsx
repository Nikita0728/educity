import React from 'react'
import about from '../assets/edusity_assets/about.png'
import play_icon from '../assets/edusity_assets/play-icon.png'

export const About = () => {
  return (
    <>
    <div className='about'>
        <div className="div-left">
                <img src={about} alt='' className='about-img'/>
                <img src={play_icon} alt='' className='play-icon'/>
        </div>
        <div className="div-right">
            <h3>About University</h3>
            <h2> Nurturing tomorrow's future.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque repudiandae, veniam at corporis magnam totam doloribus, accusamus illum nesciunt voluptatem quibusdam natus qui. Atque, illo id explicabo deleniti libero ipsa rerum odit asperiores fugiat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis amet dolore ipsam aliquid aperiam? Facere modi repellendus nostrum corporis eveniet nihil rerum repellat ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit quod eligendi temporibus! Voluptatem laborum eveniet neque alias labore placeat, dolores ducimus perferendis veniam expedita nostrum reiciendis. Earum, suscipit nobis.</p>

        </div>
       
            

       
         

    </div>
    
     </>
  )
}
