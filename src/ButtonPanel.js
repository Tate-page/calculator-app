import React from "react";
import "./ButtonPanel.css";
import Button from "./Button";
import PropTypes from 'prop-types';

class ButtonPanel extends React.Component{
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick=(buttonName)=>{
    this.props.clickHandler(buttonName);
  };

  render(){
    return(
      <div className="ButtonPanel">
        <div id="NumberedButtons">
          <div className="NumberedRows">
            <Button name="1" clickHandler={this.handleClick} />
            <Button name="2" clickHandler={this.handleClick} />
            <Button name="3" clickHandler={this.handleClick} />
          </div>
          <div className="NumberedRows">
            <Button name="4" clickHandler={this.handleClick} />
            <Button name="5" clickHandler={this.handleClick} />
            <Button name="6" clickHandler={this.handleClick} />
          </div>
          <div className="NumberedRows">
            <Button name="7" clickHandler={this.handleClick} />
            <Button name="8" clickHandler={this.handleClick} />
            <Button name="9" clickHandler={this.handleClick} />
          </div>
          <div className="NumberedRows" id="ZeroRow">
            <Button name="0" id="ZeroButton" clickHandler={this.handleClick} />
          </div>
          </div>
          <div id="OperationButtons">
            <div className="OperationRows">
              <Button name="Del" clickHandler={this.handleClick} />
              <Button name="Clear" clickHandler={this.handleClick} />
            </div>
            <div className="OperationRows">
            <Button name="+" clickHandler={this.handleClick} />
            <Button name="-" clickHandler={this.handleClick} />
            </div>
            <div className="OperationRows">
            <Button name="/" clickHandler={this.handleClick} />
            <Button name="*" clickHandler={this.handleClick} />
            </div>
            <div className="OperationRows">
            <Button name="=" clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      );
    }
}
export default ButtonPanel;
