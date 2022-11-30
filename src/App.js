import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import {useState, useEffect} from 'react'
import api from './api/posts'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('./posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log('Error: $(err.message)')
       }
      }
    }

    fetchPosts();
  }, [])

  return (

    //BEM
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="Search" element={<SearchPage/>}/>
          <Route path="/" element={<Home/>}/> 
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}


export default App;
