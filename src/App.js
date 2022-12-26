import React from 'react';
import { Route, BrowserRouter ,Routes,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;



