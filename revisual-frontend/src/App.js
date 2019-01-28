import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './home.jsx';
import MunicipalityDetails from './MunicipalityDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

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

            <Route path="/" component={Home} />
            <Route path="/municipalities/:id" component={MunicipalityDetails} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
