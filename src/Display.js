import React from 'react';
import './Display.css'

class Display extends React.Component{

    render(){
      return(
        <div className="Display">
          <p>{this.props.value}</p>
        </div>
      );
    }
}
export default Display;
