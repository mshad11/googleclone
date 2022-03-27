import React from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import Search from './Search'
function Home() {
  return (
    <div className='home'>
        <div className='home-header'>
            <div className='home-headerLeft'>
             <p>About</p>
             <p>Store</p>
            </div>

            <div className='home-headerRight'>
             <p>Gmail</p>
             <p>Images</p>
             <AppsIcon/> 
             <Avatar/> 
            </div>
        </div>
      
      <div className='home-body'>
      <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' alt='' />
      <Search/>
      </div>


    </div>
  )
}

export default Home
