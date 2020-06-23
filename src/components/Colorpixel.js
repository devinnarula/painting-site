import React, {Component} from 'react';
import './Colorpixel.css';

class Colorpixel extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        };
        this.makeActive = this.makeActive.bind(this)
    }
    makeActive() {
        if(this.props.isPainting) {
            this.setState({active: true})
        }
    }
    render() {
        return (
            <div className={this.state.active ? 'ColorpixelActive' : 'Colorpixel'} onMouseMove={this.makeActive}>
                
            </div>
        );
    }
}

export default Colorpixel;
