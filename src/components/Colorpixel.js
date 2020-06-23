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
        const color = this.props.color
        console.log(color)
        return (
            <div className={this.state.active ? 'ColorpixelActive' : 'Colorpixel'} 
                // style={{
                //     backgroundColor: color
                // }} 
                onMouseMove={this.makeActive}>
                
            </div>
        );
    }
}

export default Colorpixel;
