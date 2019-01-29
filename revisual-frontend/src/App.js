import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import MunicipalityDetails from './MunicipalityDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <main className="content">
            {/*
             * An <a> link to another page is created with:
             * <Link to="/path">Link</Link>
             *
             * Then, add the following inside this main .content element:
             * <Route path="/path" component={Component} />
             *
             * If a component shows up when it shouldn't, you may need to use:
             * <Route exact path="/" component={Component} />
             */}

            <Route path="/" exact component={Home} />
            <Route path="/marketsearch" component={MunicipalityDetails} />
            {/* <Route path="/municipalities/:id" component={MunicipalityDetails} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
