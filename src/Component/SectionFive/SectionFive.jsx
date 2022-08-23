import React from 'react'
import "./SectionFive.css"
import ContentFile from '../ContentFile/ContentFile'

const SectionFive = () => {
  return (
    <div className='sf_main'>
        <div className='sf_bgc'>

        </div>
    <div className='SectionFive'>
        <div className='s5_img1'>
        <img src="https://ableton-production.imgix.net/about/photo-6-a.jpg?dpr=2&fit=crop&h=320&ixjsv=1.1.3&q=50&w=427" alt="" />
        </div>
        <div  className='s5_img2'>
        <img src="https://ableton-production.imgix.net/about/photo-7.jpg?dpr=2&fit=crop&h=533&ixjsv=1.1.3&q=50&w=533" alt="" />
        </div>
    </div>
    <ContentFile className="file"
        header="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible." 
        content="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
        />
    </div>
  )
}

export default SectionFive