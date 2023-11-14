 
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import NavBar from './compoents/nav';
 
const App = () => {
  return (
    <Router>
      <NavBar/>
       <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/store' element={<StorePage />} />
           
        </Routes>
    </Router>
  );
};

export default App;
