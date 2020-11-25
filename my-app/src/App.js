import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home' // import our pages 
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { Switch, Route, Link, Router } from 'react-router-dom'; // import the react-router-dom components

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='' Component={Home} />
        <Route exact path='/' Component={Home} />
        <Route exact path='/Home' Component={Home} />
        <Route exact path='/Contact' Component={Contact} />
        <Route exact path='/Portfolio' Component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
