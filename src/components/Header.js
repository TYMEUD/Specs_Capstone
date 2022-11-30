import React from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {

    const [cursor] = useState('pointer');
    let navigate = useNavigate();

  return (
    <div className='header'>
        <h1 className='logo' style={{cursor}} onClick={() => {
            navigate("/");}}
            >unknown</h1>
        <div className='header__center'>
            <input className='search__text' type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p style={{cursor}} onClick={() => {
            navigate("/Login");}}>
                sign in
            </p>
                <AccountCircleIcon style={{cursor}} onClick={() => {
            navigate("/Login");}}/>
        </div>
    </div>
  )
}

export default Header