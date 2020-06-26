import React, {Component} from 'react';
import Immutable from 'immutable'
import ReactDOM from 'react-dom';
import htmlToImage from 'html-to-image'
import './DrawArea.css';

class DrawArea extends React.Component {
    constructor() {
      super();
  
      this.state = {
        lines: new Immutable.List(),
        isDrawing: false
      };
  
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.clearPainting = this.clearPainting.bind(this);
      this.saveImage = this.saveImage.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener("mouseup", this.handleMouseUp);
    }
  
    componentWillUnmount() {
      document.removeEventListener("mouseup", this.handleMouseUp);
    }
  
    handleMouseDown(mouseEvent) {
      const point = this.relativeCoordinatesForEvent(mouseEvent);
  
      this.setState((prevState) => ({
        lines: prevState.lines.push(new Immutable.List([point])),
        isDrawing: true
      }));
    }
  
    handleMouseMove(mouseEvent) {
      if (!this.state.isDrawing) {
        return;
      }
  
      const point = this.relativeCoordinatesForEvent(mouseEvent);
  
      this.setState((prevState) => ({
        lines: prevState.lines.updateIn([prevState.lines.size - 1], (line) =>
          line.push(point)
        )
      }));
    }
  
    handleMouseUp() {
      this.setState({ isDrawing: false });
    }
  
    relativeCoordinatesForEvent(mouseEvent) {
      const boundingRect = this.refs.drawArea.getBoundingClientRect();
      return new Immutable.Map({
        x: mouseEvent.clientX - boundingRect.left,
        y: mouseEvent.clientY - boundingRect.top
      });
    }
    clearPainting() {
        this.setState({lines: new Immutable.List(), isDrawing: false})
    }
    saveImage() {
        let that = this
        htmlToImage.toJpeg(document.getElementById('drawArea'), { quality: 1})
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Drawingboard.jpeg';
                link.href = dataUrl;
                that.props.addImage(dataUrl)
            });  
    }
    render() {
      return (
        <div className='DrawArea-Container'>
            <div className="DrawArea" ref="drawArea" id="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
                <Drawing lines={this.state.lines} color={this.props.color} />
            </div>
            <div className='DrawArea-Buttons'>
                <button className='DrawArea-Button' onClick={this.clearPainting} >Clear</button>
                <button className='DrawArea-Button' onClick={this.saveImage} >Save</button>
            </div>
        </div>
      );
    }
  }
  
function Drawing({ lines, color }) {
    return (
        <svg className="drawing">
        {lines.map((line, index) => (
            <DrawingLine key={index} line={line} color={color} />
        ))}
        </svg>
    );
}

function DrawingLine({ line, color }) {
    const pathData =
        "M " +
        line
        .map((p) => {
            return `${p.get("x")} ${p.get("y")}`;
        })
        .join(" L ");
    
    return <path className="path" style={{stroke: `${color}` }} d={pathData} />;
}

ReactDOM.render(<DrawArea />, document.getElementById("container"));
  
export default DrawArea;
