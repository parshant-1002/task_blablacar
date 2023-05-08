import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import PublicRoutes from './Route/PublicRoutes';
import Navbar from './View/Navbar.js/index.js';
import { useSelector } from 'react-redux';
import Loader from './Components/Atoms/Loader';
import RootRouter from './Route/RootRouter';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Loader show={useSelector(state=>state?.loaderStateReducer)}/>
        <Navbar />
        <div className='main'>
          {/* <PublicRoutes /> */}
          <RootRouter/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
