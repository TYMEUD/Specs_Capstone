import React from 'react'
import './SearchResult.css'


function SearchResult({
    img,
    caption,
    tags,
    user,
    body
}) {
  return (
    <div className='searchResult'>
        <img src={img} alt ="" />
        <div className='searchResult__info'>
            <div className='searchResults__top'>
                <h3>{caption}</h3>
                <p>{tags}</p>
                <p>{user}</p>
                <p>____</p>
                <p>{body}</p>
            </div>

            <div className='searchResult__body'></div>

            <div></div>
        </div>
    </div>
  )
}

export default SearchResult