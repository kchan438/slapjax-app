import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
//pages

import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-link" href="#"><Link to="/" className="link">Home</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-list">
                  <li classname="nav-item active">
                    <a className="nav-link" href="#"><Link to="/" className="link">Home</Link><span class="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>


      <Switch>
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
