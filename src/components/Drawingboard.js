import React, {Component} from 'react';
import Colorpixel from './Colorpixel'
import htmlToImage from 'html-to-image'
import './Drawingboard.css';

class Drawingboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPainting: false,
        };
        this.makePainting = this.makePainting.bind(this)
        this.stopPainting = this.stopPainting.bind(this)
        this.downloadImage = this.downloadImage.bind(this)
    }
    makePainting() {
        this.setState({isPainting: !this.state.isPainting})
    }
    stopPainting() {
        this.setState({isPainting: false})
    }
    downloadImage() {
        htmlToImage.toJpeg(document.getElementById('Drawingboard'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Drawingboard.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
    render() {
        const n = 625
        return (
            <div className='Drawingboard-Container'>
                <div id='Drawingboard' className="Drawingboard" onMouseDown={this.makePainting} onMouseUp={this.makePainting} onMouseLeave={this.stopPainting} >
                    {[...Array(n)].map(() => (
                        <Colorpixel isPainting={this.state.isPainting} color={this.props.color} />
                    ))}
                </div>
                <button className='Drawingboard-Button' onClick={this.downloadImage} >⬇</button>
            </div>
        );
    }
}

export default Drawingboard;
