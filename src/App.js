import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home' // import our pages 
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Portfolio' component={Home} />
          <Route exact path='/Work' component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
