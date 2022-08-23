import React from 'react'
import VidLogo from "../../VidLogo.png"
import "./SectionTwo.css"

const SectionTwo = () => {
  return (
    <>
    <div className='s2_img'>
       
        <img className='s2_img1' src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&dpr=2&fit=crop&fm=jpg&ixjsv=1.1.3&q=50&w=640" alt=''/>
        <img className='s2_img2' src={VidLogo} alt="" />
    <p className='s2_p'>Why Ableton - Juanpe Bolivar</p>

    </div>
    </>
  )
}

export default SectionTwo