// import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="Register" element={<Register/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Posts" element={<SearchPage/>}/>
        </Routes>
      <Footer />
      </Router>
  
  );
}


export default App;
