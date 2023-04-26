import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PublicRoutes from './Route/PublicRoutes';
import Navbar from './View/Navbar.js/index.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='main'>
       <PublicRoutes>

       </PublicRoutes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
