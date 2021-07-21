import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { Button, Nav, Navbar, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';
//pages
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Upload from './pages/upload';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <head>
        <link 
          rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous">
        </link>
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
              <Nav.Link href="/videos">Videos</Nav.Link>
              {/* Will need to keep track of isLoggedIn */}
              {/* <Nav.Link href="/upload">Upload</Nav.Link> */}
              <Nav.Link href="/about">About</Nav.Link>
              {/* Login and Register links should be dependant on isLoggedIn */}
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              {/* <Nav.Link href="/movies">Movies</Nav.Link> */}
              {/* <Nav.Link href="#music">Search</Nav.Link> */}
              {/* <InputGroup className="mb-1">
                <FormControl className="m-auto" />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
              </InputGroup> */}
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
            <Route path="/about" component={About} />
            {/* Upload button should appear if logged in */}
            {/* <Route path="/upload" component={Upload} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
