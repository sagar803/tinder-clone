import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton'


function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img
        className='header-logo' 
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
    
  )
}

export default Header