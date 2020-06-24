import React, {Component} from 'react';
import { SketchPicker } from 'react-color';
import Drawingboard from '../components/Drawingboard'
import Collection from '../components/Collection'
import './Freedraw.css';

class Freedraw extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: '#000',
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(color) {
        this.setState({color: color.hex})
    }
    render() {
        return (
            <div>
                <h1>FREE DRAW</h1>
                <div className="Freedraw-DrawingBoard">
                    <Drawingboard color={this.state.color}/>
                    <SketchPicker color={this.state.color} onChange={this.changeColor}/>
                </div>
                <Collection />
            </div>
        );
    }
}

export default Freedraw;
