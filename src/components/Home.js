import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

// type rfce for shortcut

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home__section'>
            <Card src={'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwJTIwaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
            title='HipHop'/>
            <Card  src={'https://images.unsplash.com/photo-1529245856630-f4853233d2ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
            title='Pop'/>
            <Card src={'https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
            title='Punk'/>
        </div>
    </div>
  )
}

export default Home