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
            images: []
        }
        this.changeColor = this.changeColor.bind(this)
        this.addImage = this.addImage.bind(this)
        this.resetColor = this.resetColor.bind(this)
    }
    changeColor(color) {
        this.setState({color: color.hex})
    }
    addImage(image) {
        this.setState({images: [...this.state.images, image]})
    }
    resetColor() {
        this.setState({color: '#FFFFFF'})
    }
    render() {
        return (
            <div>
                <h1>FREE DRAW</h1>
                <div className="Freedraw-DrawingBoard">
                    <Drawingboard color={this.state.color} addImage={this.addImage} resetColor={this.resetColor} />
                    <SketchPicker color={this.state.color} onChange={this.changeColor}/>
                </div>
                <button onClick={this.resetColor}>Clear</button>
                <Collection images={this.state.images} />
            </div>
        );
    }
}

export default Freedraw;
