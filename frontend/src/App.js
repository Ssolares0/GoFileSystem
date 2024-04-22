//import logo from './logo.svg';
import './App.css';
import {Home} from './components/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>  
    </Router>

  );
}

export default App;