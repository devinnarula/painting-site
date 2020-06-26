import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import PixelArt from './pages/PixelArt';
import FreeDraw from './pages/FreeDraw';
import Collection from './components/Collection'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
  }
  this.addImage = this.addImage.bind(this)
  }
  addImage(image) {
    this.setState({images: [...this.state.images, image]})
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar className="App-Navbar">
            <Navbar.Brand className='App-NavTitle'>Let's Draw!</Navbar.Brand>
            <div>
            <Nav>
              <Link className='App-link' to='/'>Home</Link>
              <Link className='App-link' to='/pixelart'>Pixel Art</Link>
              <Link className='App-link' to='/freedraw'>Free Draw</Link>
            </Nav>
            </div>
          </Navbar>

          <Route exact path='/' component={(routeProps) => (<Home {...routeProps} addImage={this.addImage} />)} />
          <Route exact path='/pixelart' component={(routeProps) => (<PixelArt {...routeProps} addImage={this.addImage} />)} />
          <Route exact path='/freedraw' component={(routeProps) => (<FreeDraw {...routeProps} addImage={this.addImage} />)} />

          <Collection images={this.state.images} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
