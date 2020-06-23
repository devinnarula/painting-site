import React, {Component} from 'react';
import Colorpixel from './Colorpixel'
import './Drawingboard.css';

class Drawingboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPainting: false,
        };
        this.makePainting = this.makePainting.bind(this)
    }
    makePainting() {
        this.setState({isPainting: !this.state.isPainting})
    }
    render() {
        const n = 2500
        return (
            <div className="Drawingboard" onMouseDown={this.makePainting} onMouseUp={this.makePainting}>
                {[...Array(n)].map(() => (
                    <Colorpixel isPainting={this.state.isPainting}/>
                ))}
            </div>
        );
    }
}

export default Drawingboard;
