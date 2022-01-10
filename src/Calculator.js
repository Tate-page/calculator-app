import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Calculator.css";
import  calculateButtons from "./calculateButtons.js"

class Calculator extends React.Component{
  state = {
    current: null,
  };

  handleClick= buttonName =>{
    this.setState(calculateButtons(this.state,buttonName));
  };

  render(){
    return(
      <div className="Calculator">
        <Display value={this.state.current}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}
export default Calculator;
