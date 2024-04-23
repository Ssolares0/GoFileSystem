import React from 'react';
import {Home} from './components/home.js';
import {Screen1} from './components/screen1.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/screen1" element={<Screen1 />} />

      </Routes>  
    </Router>

  );
}

export default App;