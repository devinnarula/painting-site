import React, {Component} from 'react';
import { SketchPicker } from 'react-color';
import Drawingboard from '../components/Drawingboard'
import './Freedraw.css';

class Freedraw extends Component {
    render() {
        return (
            <div>
                <h1>FREE DRAW</h1>
                <div className="Freedraw-DrawingBoard">
                <Drawingboard/>
                <SketchPicker />
                </div>
            </div>
        );
    }
}

export default Freedraw;
