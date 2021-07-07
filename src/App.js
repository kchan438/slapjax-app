import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';
//pages
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Register from './pages/Register';
import Login from './pages/Login';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      </head>

      <div className="outer">
        <div className="inner">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">SlapJax</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/music">Music</Nav.Link>
              <Nav.Link href="/videos">Video</Nav.Link>
              {/* <Nav.Link href="/movies">Movies</Nav.Link> */}
              {/* <Nav.Link href="#music">Search</Nav.Link> */}
              <InputGroup className="mb-1">
                <FormControl className="m-auto" placeholder="Search" />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route path="/music" component={Music} />
            <Route path="/videos" component={Videos} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
