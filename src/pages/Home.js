import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='Home-Title'>LET'S DRAW!</h1>
                <div className='Home-Images'>
                    <img className='Image-Left' src={require('../img/smile.jpeg')} />
                    <img className='Image-Right' src={require('../img/beach.jpeg')} />
                    <img className='Image-Left' src={require('../img/balloons.jpeg')} />
                </div>
            </div>
        );
    }
}

export default Home;
