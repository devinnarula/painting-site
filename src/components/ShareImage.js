import React, {Component} from 'react';
import htmlToImage from 'html-to-image'
import './ShareImage.css';

class ShareImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            blur: 0,
            huerotate: 0,
            invert: 0,
            opacity: 100,
            saturate: 100,
            sepia: 0,
        };
        this.downloadImage = this.downloadImage.bind(this)
        this.updateBrightness = this.updateBrightness.bind(this)
        this.updateContrast = this.updateContrast.bind(this)
        this.updateGrayscale = this.updateGrayscale.bind(this)
        this.updateBlur = this.updateBlur.bind(this)
        this.updateHuerotate = this.updateHuerotate.bind(this)
        this.updateInvert = this.updateInvert.bind(this)
        this.updateOpacity = this.updateOpacity.bind(this)
        this.updateSaturate = this.updateSaturate.bind(this)
        this.updateSepia = this.updateSepia.bind(this)
    }
    downloadImage() {
        const that = this
        htmlToImage.toJpeg(document.getElementById('Drawingboard'), { quality: 0.95})
            .then(function () {
                var link = document.createElement('a');
                link.download = 'Drawingboard.jpeg';
                link.href = that.props.imgSrc;
                link.click();
            });  
    }
    updateBrightness(event){
        this.setState({brightness: event.target.value})
    }
    updateContrast(event){
        this.setState({contrast: event.target.value})
    }
    updateGrayscale(event){
        this.setState({grayscale: event.target.value})
    }
    updateBlur(event){
        this.setState({blur: event.target.value})
    }
    updateHuerotate(event){
        this.setState({huerotate: event.target.value})
    }
    updateInvert(event){
        this.setState({invert: event.target.value})
    }
    updateOpacity(event){
        this.setState({opacity: event.target.value})
    }
    updateSaturate(event){
        this.setState({saturate: event.target.value})
    }
    updateSepia(event){
        this.setState({sepia: event.target.value})
    }
    render() {
        return (
            <div className='ShareImage'>
                <h1>Edit and Download</h1>
                <div className='ShareImage-Content'>
                    <img className="ShareImage-img" src={this.props.imgSrc} 
                    style={{
                        filter: `
                        brightness(${this.state.brightness}%)
                        contrast(${this.state.contrast}%)
                        grayscale(${this.state.grayscale}%)
                        blur(${this.state.blur}px)
                        hue-rotate(${this.state.huerotate*3.6}deg)
                        invert(${this.state.invert}%)
                        opacity(${this.state.opacity}%)
                        saturate(${this.state.saturate}%)
                        sepia(${this.state.sepia}%)
                        `
                    }} 
                    />
                    <div className='ShareImage-Buttons'>
                        <button onClick={this.downloadImage} >Download</button>
                        <div class="slidecontainer">
                            <div>
                            <label for="brightness">Brightness</label>
                            <input type="range" min="0" max="100" value={this.state.brightness} name="brightness" onChange={this.updateBrightness} />
                            </div>
                            <div>
                            <label for="contrast">Contrast</label>
                            <input type="range" min="0" max="100" value={this.state.contrast} name="contrast" onChange={this.updateContrast} />
                            </div>
                            <div>
                            <label for="grayscale">Grayscale</label>
                            <input type="range" min="0" max="100" value={this.state.grayscale} name="grayscale" onChange={this.updateGrayscale} />
                            </div>
                            <div>
                            <label for="blur">Blur</label>
                            <input type="range" min="0" max="100" value={this.state.blur} name="blur" onChange={this.updateBlur} />
                            </div>
                            <div>
                            <label for="hue-rotate">Hue-Rotate</label>
                            <input type="range" min="0" max="100" value={this.state.huerotate} name="hue-rotate" onChange={this.updateHuerotate} />
                            </div>
                            <div>
                            <label for="invert">Invert</label>
                            <input type="range" min="0" max="100" value={this.state.invert} name="invert" onChange={this.updateInvert} />
                            </div>
                            <div>
                            <label for="opacity">Opacity</label>
                            <input type="range" min="0" max="100" value={this.state.opacity} name="opacity" onChange={this.updateOpacity} />
                            </div>
                            <div>
                            <label for="saturate">Saturate</label>
                            <input type="range" min="0" max="100" value={this.state.saturate} name="saturate" onChange={this.updateSaturate} />
                            </div>
                            <div>
                            <label for="sepia">Sepia</label>
                            <input type="range" min="0" max="100" value={this.state.sepia} name="sepia" onChange={this.updateSepia} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareImage;
