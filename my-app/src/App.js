import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home' // import our pages 
import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components

function App() {
  return (
    <Router><div className="App">
      <Container>
        <Switch>
          <Route exact path='/' Component={Home} />
          <Route exact path='/Contact' Component={Contact} />
          <Route exact path='/Portfolio' Component={Portfolio} />
        </Switch>
      </Container>
    </div>
    </Router>

  );
}

export default App;
