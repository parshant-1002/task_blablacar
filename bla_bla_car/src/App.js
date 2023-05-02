import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import PublicRoutes from './Route/PublicRoutes';
import Navbar from './View/Navbar.js/index.js';
import { useSelector } from 'react-redux';
import Loader from './Components/Atoms/Loader';

function App() {
  console.log(useSelector(state=>state))
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
        <div className='main'>
          <PublicRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
