import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './Searchpage.css'
import SearchIcon from '@material-ui/icons/Search'
import { useStateValue } from '../Stateprovider'
import useGoogleSearch from '../useGoogleSearch'
function Searchpage() {
const[{term}] = useStateValue()
const {data} = useGoogleSearch(term)
console.log(data)



  return (
    <div className='searchpage'>
        <div className='searchpage-header'>
         <Link to= '/'>
        <img className='searchpage-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
        </Link>
         


            <div className='searchpage-headerbody'>
           <Search hidebuttons/>  
            <div className='searchpage-options'>
      
              <div className='searchpage-optionsLeft'>

              <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    

                <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    

                <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    

                <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    

                <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    

                <div className='searchpage-option'>
                <SearchIcon/>
                <Link to = '/all'>All</Link>
                  
                </div>    



               </div>

               <div className='searchpage-optionsRight'>

               <div className='searchpage-option'>
                 
                <Link to = '/all'>Settings</Link>
                  
                </div>    

                <div className='searchpage-option'>
                
                <Link to = '/all'>Tools</Link>
                  
                </div>    


               </div>


         </div>



     </div>
</div>

<div className='searchpage-results'>
    <p className='searchpage-resultcount'>
        About 1500 results shown in 0.55 seconds for hello
    </p>
    <div className='searchpage-result'>
       <a href='' target= 'blank'>
           <img className='searchpage-resultimage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' alt=''/>
           <p>link.com</p>
       </a>
       
       <a className='searchpage-resulttitle' href='' target='_blank'> 
       <h2>Title</h2></a>
       <p className='searchpage-resultdescription'>description</p>
    </div>
</div>

    </div>
  )
}

export default Searchpage
