import React from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Header() {

    const [cursor, setCursor] = useState('pointer');

        const changeCursor = () => {
            setCursor(prevState => {
                return 'pointer';
            })
            return 'crosshair';
        }
    let navigate = useNavigate();
  return (
    <div className='header'>
        <h1 className='logo' style={{cursor}} onClick={() => {
            navigate("/");}}
            >unknown</h1>
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