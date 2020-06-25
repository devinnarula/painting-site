import React, {Component} from 'react';
import Colorpixel from './Colorpixel'
import htmlToImage from 'html-to-image'
import './Drawingboard.css';

class Drawingboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPainting: false,
            shouldClear: false
        };
        this.makePainting = this.makePainting.bind(this)
        this.stopPainting = this.stopPainting.bind(this)
        this.saveImage = this.saveImage.bind(this)
        this.clearPainting = this.clearPainting.bind(this)
        this.doneClear = this.doneClear.bind(this)
    }
    makePainting() {
        this.setState({isPainting: !this.state.isPainting})
    }
    stopPainting() {
        this.setState({isPainting: false})
    }
    clearPainting(){
        // this.makePainting();
        // this.props.resetColor();
        this.setState({shouldClear: true})
    }
    doneClear(){
        // this.makePainting();
        // this.props.resetColor();
        this.setState({isPainting: !this.state.isPainting, shouldClear: false})
    }
    saveImage() {
        let that = this
        htmlToImage.toJpeg(document.getElementById('Drawingboard'), { quality: 0.95})
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Drawingboard.jpeg';
                link.href = dataUrl;
                // link.click();
                that.props.addImage(dataUrl)
            });            
    }
    render() {
        const n = 625
        return (
            <div className='Drawingboard-Container'>
                <div id='Drawingboard' className="Drawingboard" onMouseDown={this.makePainting} onMouseUp={this.makePainting} onMouseLeave={this.stopPainting} >
                    {[...Array(n)].map(() => (
                        <Colorpixel isPainting={this.state.isPainting} color={this.props.color} shouldClear={this.state.shouldClear} doneClear={this.doneClear} resetColor={this.props.resetColor} />
                    ))}
                </div>
                <div className='Drawingboard-Buttons'>
                    <button className='Drawingboard-Button' onClick={this.clearPainting} >Clear</button>
                    <button className='Drawingboard-Button' onClick={this.saveImage} >Save</button>
                </div>
            </div>
        );
    }
}

export default Drawingboard;
