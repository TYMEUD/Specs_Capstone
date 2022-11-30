import React, { useState } from 'react'
import './Banner.css'
import {Button} from "@mui/material"
import Search from './Search'
import {useNavigate} from 'react-router-dom'

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState 
    (false);

  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search/>}

            <Button onClick={() => 
            setShowSearch(!showSearch)}
            className='banner__searchButton' 
            variant='outlined'>

                {showSearch
                ? "Hide" :
                "Search Dates"}
            </Button>
        </div>
        <div className='banner__info'>
            <h1>Explore your favorite local artists</h1>
            <h5>See posts from local artists such as release dates, tours, merch, etc.</h5>
            <Button variant='outlined' onClick={() => {
            navigate("/Search");}}>
                Explore Artist Posts
            </Button> 
        </div>
    </div>
  )
}

export default Banner