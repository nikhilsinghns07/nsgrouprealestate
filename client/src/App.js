import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';

import Header from './components/Header';
import Contact from './pages/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      
      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/aboutus'>
          <AboutUs />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path ='*'>
          <Redirect to='/'></Redirect>
        </Route>

      </Switch>

      
      </React.Fragment>
    

  );
}

export default App;



