import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Freedraw from './pages/Freedraw';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="App-Navbar">
          <Navbar.Brand className='App-NavTitle'>Let's Draw!</Navbar.Brand>
          <div>
          <Nav>
            <Link className='App-link' to='/'>Home</Link>
            <Link className='App-link' to='/freedraw'>Free Draw</Link>
          </Nav>
          </div>
        </Navbar>

        <Route exact path='/' component={Home} />
        <Route exact path='/freedraw' component={Freedraw} />

      </BrowserRouter>
    </div>
  );
}

export default App;
