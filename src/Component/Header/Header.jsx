import React, { useState } from 'react'
import "./Header.css"
import { motion } from 'framer-motion'
import More from '../More/More'

const Header = (props) => {
    const [expand,setExpand] = useState(false)


    const menuVariants={
        true:{
            top: "0"
        },
        false:{
            top: "-1200%"
        }
    }
  return (
    <div className='barAlign' >
    <div className='svg'>
        <svg role="img" aria-labelledby="logo"
        fill={expand ?"white":""}
        class="main-nav__logo__image" 
        xmlns="http://www.w3.org/2000/svg" 
        width="45" height="21" viewBox="0 0 45 21">
            <title id="logo">Ableton Homepage</title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
                </path>
                </svg>
                </div>
        <div className='menu' 
        style={{
            top: "0", 
            left:"8rem",
            color: expand ?"white":""
        }}
        onClick={()=>setExpand(!expand)}>
            Menu 
        </div>
    <motion.div className='Header'
        variants={menuVariants}
        animate={window.innerWidth<=1024?`${expand}`:''}
    >
    
       
    <div className='navBar'>
        <div className="firstNav">
       
                <ul className='nav'>
                    {props.navBar}
                </ul>
                
                
                    <ul  className="secNav">
                    <li><span>Try Live for Free</span></li>
                    <li className='secNavList'>Log in or register</li>
                    </ul>
                </div>
    
                <div>{props.more && <More/>}</div>
                </div>
                
                
    </motion.div>
        
    </div>
  )
}

export default Header