import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Header() {
  return (
    <div className='header'>
        <h1 className='logo'>unknown</h1>
        
        <div className='header__center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p>
                Info
                <AccessibilityNewIcon/>
            </p>
        </div>
    </div>
  )
}

export default Header