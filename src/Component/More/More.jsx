import React from 'react'
import "./More.css"

const More = () => {
    const onAblbeton = ["Blog","Ableton for the Classroom","Ableton for Colleges and Universities","Certified Training","About Ableton","Jobs","Apprenticeships"]
    const onAblbetonList= onAblbeton.map((on,i)=>{
        return <li key={i}>{on}</li>
    })
  return (
    <div className='More'>
        <h1>More on Ableton.com:</h1>
        <div className="moreList">
        {onAblbetonList}
        </div>
        <h1>More from Ableton.com:</h1>
        <div>
            <ul  className='moreList'>
            <li><b>Loop</b><p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p></li>
            <li><b>Learning Music</b><p>Learn the fundamentals of music making right in your browser.</p></li>
            <li><b>Learning Synths</b><p>Get started with synthesis using a web-based synth and accompanying lessons.</p></li>
            <li><b>Making Music</b><p>Some tips from 74 Creative Strategies for Electronic Producers.</p></li>
            </ul>
        </div>

        
    </div>
  )
}

export default More