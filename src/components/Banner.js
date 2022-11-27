import React from 'react'
import './Banner.css'
import {Button} from "@mui/material"
import {useState} from 'react'
import Search from './Search'

function Banner() {
    const [showSearch, setShowSearch] = useState 
    (false);

  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search/>}

            <Button onClick={() => 
            setShowSearch(!showSearch)}
            className='banner__searchButton' 
            variant='outlined'>Search Dates
            </Button>
        </div>
        <div className='banner__info'>
            <h1>Explore your favorite local artists</h1>
            <h5>See posts from local artists such as release dates, tours, merch, etc.</h5>
            <Button variant='outlined'>
                Explore Artists
            </Button>
        </div>
    </div>
  )
}

export default Banner