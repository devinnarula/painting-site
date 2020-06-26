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
            oldColor: '#FFF',
            // images: []
        }
        this.changeColor = this.changeColor.bind(this)
        // this.addImage = this.addImage.bind(this)
        this.resetColor = this.resetColor.bind(this)
        this.getColor = this.getColor.bind(this)
    }
    changeColor(color) {
        this.setState({color: color.hex})
    }
    // addImage(image) {
    //     this.setState({images: [...this.state.images, image]})
    // }
    resetColor() {
        this.setState({oldColor: this.state.color})
        this.setState({color: '#FFFFFF'})
    }
    getColor() {
        this.setState({color: this.state.oldColor})
    }
    render() {
        return (
            <div>
                <h1 className='Freedraw-Title'>FREE DRAW</h1>
                <div className="Freedraw-DrawingBoard">
                    <Drawingboard color={this.state.color} addImage={this.props.addImage} resetColor={this.resetColor} getColor={this.getColor}/>
                    <SketchPicker color={this.state.color} onChange={this.changeColor}/>
                </div>
                {/* <Collection images={this.state.images} /> */}
            </div>
        );
    }
}

export default Freedraw;
