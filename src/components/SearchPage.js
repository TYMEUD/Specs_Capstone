import React from 'react';
import './SearchPage.css';
import { Button } from "@mui/material";
// import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p></p>
                <Button variant="outlined">Genre</Button>
                <Button variant="outlined">Artist</Button>
                <Button variant="outlined">Songs</Button>
                <Button variant="outlined">More filters</Button>
            </div>       
        
        </div>
    )
}

export default SearchPage