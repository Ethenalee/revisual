import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>

          <main className="content">
            {/*
             * A link to another page is created with:
             * <NavLink to="/path">Link</NavLink>
             *
             * Then, add the following inside this main .content element:
             * <Route path="/path" component={Component}/>
             *
             * If a component shows up when it shouldn't, you may need to use:
             * <Route exact path="/" component={Component}/>
             */}
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
