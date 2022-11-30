import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchPage from '../components/SearchPage';
import React from 'react';

// export default axios.create({
//     baseURL: 'http://localhost:3000'
// })

function Posts() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const responsePosts = await axios.get('https://swapi.dev/api/people');
        setPosts(responsePosts.data);
    
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    
return (
    <SearchPage>
        {
            posts.map((post, index) =>
            <div key={index}>
                {post.body}. {post.title}
            </div>
            )
        }
    </SearchPage>
)
}

export default Posts