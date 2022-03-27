import {useState,React} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import {  useNavigate } from 'react-router-dom'
import { useStateValue } from '../Stateprovider'

function Search( {hidebuttons}) {
const[input, setInput] = useState("")
const navigate = useNavigate()

const[{}, dispatch] = useStateValue()


const search = (e) =>{
  e.preventDefault()
  navigate('/search')
}
 return (
    <div> 
       <form className='search'>
           <div className='search-input'>
           <SearchIcon className='search-icon'/>
             <input value={input} onChange= {(e) => setInput (e.target.value)}  />
             <MicIcon/>
           </div>
       {!hidebuttons && <div className='search-icons'>
     <Button onClick={search} type = 'submit' variant='outline'>Google Search</Button>
     <Button variant='outline'>I am Feeling Lucky</Button>
     </div>}
     
       </form>
    </div>
  )
}

export default Search
