import React, {Component} from 'react';
import './Colorpixel.css';

class Colorpixel extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
            shouldUpdate: false,
        };
        this.makeActive = this.makeActive.bind(this)
        this.toggleShouldUpdate = this.toggleShouldUpdate.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.shouldUpdate){
            return true
        }
        else {
            return false
        }
    }
    makeActive() {
        if(this.props.isPainting) {
            this.setState({active: true})
        }
    }
    toggleShouldUpdate(){
        this.setState({shouldUpdate: !this.state.shouldUpdate})
    }
    render() {
        const color = this.props.color
        console.log(color)
        return (
            <div 
                className='Colorpixel' 
                style={{
                    backgroundColor: `${this.state.shouldUpdate ? this.props.color : 'FFF'}` 
                }} 

                onMouseOver={this.toggleShouldUpdate}
                onMouseOut={this.toggleShouldUpdate}
                onMouseMove={this.makeActive}
                onClick={this.makeActive}
                >
                
            </div>
        );
    }
}

export default Colorpixel;
