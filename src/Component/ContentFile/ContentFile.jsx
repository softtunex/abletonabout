import React from 'react'
import "./ContentFile.css"

const ContentFile = (props) => {
  return (
    <div className='content'>
    <h2>{props.header}</h2>
    <p>{props.content}</p>
    </div>
  )
}

export default ContentFile