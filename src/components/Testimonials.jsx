import React from 'react'
import './Styles.css'
import next_icon from '../assets/edusity_assets/next-icon.png'
import back_icon from '../assets/edusity_assets/back-icon.png'
import user_1 from '../assets/edusity_assets/user-1.png'
import user_2 from '../assets/edusity_assets/user-2.png'
import user_3 from '../assets/edusity_assets/user-3.png'
import user_4 from '../assets/edusity_assets/user-4.png'
import { useRef } from 'react'


export const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{ 
        if(tx>-50){
            tx=tx-25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0)
        {
            tx=tx+25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className='Testimonials new div-right' id='test'>
 <h3>Testimonials</h3>
     <div><h2> What students say!</h2></div>
     <div className='test-2'>
             <img src={next_icon} className='next-btn' onClick={slideForward}/>
             <img src={back_icon} className='back-btn' onClick={slideBackward}/>
             <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_1} alt=''/>
                                <div>
                                     <h3>Monica Becky</h3>
                                     <span>Educity,USA</span>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a debitis officiis consequuntur quia totam ex accusantium porro libero. Reiciendis distinctio a, numquam quae dignissimos vero omnis odit obcaecati non? Dicta ipsam rerum voluptatibus?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_2} alt=''/>
                                <div>
                                     <h3>John Becky</h3>
                                     <span>Educity,USA</span>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a debitis officiis consequuntur quia totam ex accusantium porro libero. Reiciendis distinctio a, numquam quae dignissimos vero omnis odit obcaecati non? Dicta ipsam rerum voluptatibus?</p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_3} alt=''/>
                                <div>
                                     <h3>Stormy Scott</h3>
                                     <span>Educity, Canada</span>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a debitis officiis consequuntur quia totam ex accusantium porro libero. Reiciendis distinctio a, numquam quae dignissimos vero omnis odit obcaecati non? Dicta ipsam rerum voluptatibus?</p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_4} alt=''/>
                                <div>
                                     <h3>Jonathan steel</h3>
                                     <span>Educity,England</span>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a debitis officiis consequuntur quia totam ex accusantium porro libero. Reiciendis distinctio a, numquam quae dignissimos vero omnis odit obcaecati non? Dicta ipsam rerum voluptatibus?</p>
                        </div>
                    </li>
                </ul>
             </div>

     </div>
    </div>
  )
}
