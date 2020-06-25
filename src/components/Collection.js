import React, {Component} from 'react';
import ShareImage from './ShareImage'
import './Collection.css';

class Collection extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedImage: '',
            shouldDisplay: false
        };
        this.displayImage = this.displayImage.bind(this)
    }
    displayImage(img) {
        this.setState({selectedImage: img, shouldDisplay: true})
    }
    render() {
        return (
            <div className='Collection-Container'>
                {this.state.shouldDisplay && <ShareImage imgSrc={this.state.selectedImage} />}
                <h1>My Collection:</h1>
                <div className='Collection' >
                    {this.props.images.map((i) => (
                        <img src={i} className="Collection-img" onClick={() => this.displayImage(i)} />
                    ))}
                    {/* {this.props.images.map((i) => (
                        <div className="Collection-Overlay">
                            <h1>Download</h1>
                        </div>
                    ))} */}
                </div>
            </div>
        );
    }
}

export default Collection;
