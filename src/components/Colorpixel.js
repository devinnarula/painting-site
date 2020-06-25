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
    componentWillReceiveProps() {
        if(this.props.shouldClear) {
            
            this.props.resetColor()
            this.props.doneClear()
            this.setState({shouldUpdate: true})
            this.forceUpdate()
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.shouldUpdate){
            return true
        }
        else {
            return false
        }
    }
    componentDidUpdate(){
        if(this.state.shouldUpdate){
            this.setState({shouldUpdate: false})
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
        return (
            <div 
                className='Colorpixel' 
                style={{
                    backgroundColor: `${(this.state.shouldUpdate) ? this.props.color : 'FFFFFF'}` 
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
