
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Searchpage from './pages/Searchpage';


function App() {
  return (
    
      <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/search' element = {<Searchpage/>} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
