import React, {Component} from 'react';
import './Collection.css';

class Collection extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        };
        
    }
    render() {
        
        return (
            <div>
                <h1>My Collection:</h1>
                <div className='Collection' >
                    {this.props.images.map((i) => (
                        <img src={i} className="Collection-img"/>
                    ))}
                    {/* {this.props.images.map((i) => (
                        <div className="Collection-Overlay">
                            <img src={require('../img/downloadicon.png')} className="Collection-Downloadimg"/>
                        </div>
                    ))} */}
                </div>
            </div>
        );
    }
}

export default Collection;
