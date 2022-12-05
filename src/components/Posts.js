import React from 'react'
import './Posts.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const getAllPosts= () => {
    axios.get('/posts') 
        .then(res => setPosts(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getAllPosts()
    }, [])
    
  return (
    <div className='searchResult'>
        {/* <img src={img} alt ="" /> */}
        <div className='searchResult__info'>
            <div className='searchResults__top'>
                <h3>caption</h3>
                <p>user</p>
                <p>tags</p>
                <p>____</p>
                <p>body</p>
            </div>

            <div className='searchResult__body'></div>

            <div></div>
        </div>
    </div>
  )
}

export default Posts