import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import {useNavigate} from 'react-router-dom'


// type rfce for shortcut

function Home() {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <Banner />

        <div className='home__section'>
            <Card onClick={() => {
            navigate("/HipHop");}} src={'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwJTIwaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
            title='HipHop'/>
            <Card onClick={() => {
            navigate("/Pop");}} src={'https://images.unsplash.com/photo-1529245856630-f4853233d2ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
            title='Pop'/>
            <Card onClick={() => {
            navigate("/Punk");}} src={'https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
            title='Punk'/>
            </div>
            <div className='home__section'>
              <Card onClick={() => {
            navigate("/Indie");}} src={'https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
            title='Indie'/>
              <Card  onClick={() => {
            navigate("/Rock");}} src={'https://images.unsplash.com/photo-1477927849362-0fb1e7d59ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9jayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
            title='Rock'/>
              <Card  onClick={() => {
            navigate("/Metal");}}src={'https://images.unsplash.com/photo-1506091403742-e3aa39518db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
            title='Metal'/>
            </div>
    </div> 
  )
}

export default Home