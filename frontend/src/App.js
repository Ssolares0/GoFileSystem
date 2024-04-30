import React from 'react';
import {Home} from './components/home.js';
import {Screen1} from './components/screen1.js';
import {Screen2} from './components/screen2.js';
import {Screen2_partition} from './components/screen2_partition.js';
import {Reports} from './components/reports.js';

import './css/screen1.css';
import './css/screen2.css';
import './css/reports.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen2_partition" element={<Screen2_partition />} />
        <Route path="/reports" element={<Reports />} />



      </Routes>  
    </Router>

  );
}

export default App;