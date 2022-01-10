import React from "react";
function calculateButtons(calculator, buttonName){

  if(buttonName==="="){
    return{
      current: calculateEquation(calculator.current),
    }
  }else if((buttonName>=0 && buttonName<=9) || buttonName==="+" || buttonName==="-" || buttonName==="*" || buttonName==="/" || buttonName==="(" || buttonName===")"){
    if(calculator.current===null){
      return{
        current: buttonName,
      }
    }else{
      return{
        current: calculator.current+buttonName,
      }
    }
  }else if(buttonName==="Clear"){
    return{
      current: null,
    }
  }else if(buttonName==="Del"){
    let length=calculator.current.length;
    return{
      current: calculator.current.substring(0,length-1),
    }
  }
}

function calculateEquation(current){
  let treeArr=[current];
  treeArr=createTree(treeArr,0);

  treeArr.forEach(function(entry) {
    console.log(entry);
  });
  let ans=calculateTree(treeArr);
  return{
    current: ans,
  }
}

function createTree(Arr,arrIndex){
  //find root
  let valueIndex=Arr[arrIndex].length-1;
  let isOperatorFound=false;
  while( valueIndex>0 && isOperatorFound===false ){
    if(Arr[arrIndex].charAt(valueIndex)==="+" || Arr[arrIndex].charAt(valueIndex)==="-"){
      isOperatorFound=true;
    }else{
      valueIndex--;
    }
  }
  if(isOperatorFound===false){
    valueIndex=Arr[arrIndex].length-1;
    while(valueIndex>0 && isOperatorFound===false){
      if(Arr[arrIndex].charAt(valueIndex)==="*" || Arr[arrIndex].charAt(valueIndex)==="/"){
        isOperatorFound=true;
      }else{
        valueIndex--;
      }
    }
  }
  //creates a leaf Node or internal
  if(isOperatorFound===true){//internal
    console.log("internal node: ",Arr[arrIndex].charAt(valueIndex));
    console.log("valueIndex: ",valueIndex);
    console.log("equation: ", Arr[arrIndex]);
    let leftNodeVal;
    if(valueIndex==1){
      leftNodeVal=Arr[arrIndex].charAt(0);
    }else{
      leftNodeVal=Arr[arrIndex].substring(0,valueIndex-1);
    }
    let rightNodeVal=Arr[arrIndex].substring(valueIndex+1);
    Arr[arrIndex]=Arr[arrIndex].charAt(valueIndex);
    console.log("left node:", leftNodeVal);
    console.log("right node:", rightNodeVal);
    Arr[2*arrIndex+1]=leftNodeVal;
    createTree(Arr,2*arrIndex+1);
    Arr[2*arrIndex+2]=rightNodeVal;
    createTree(Arr,2*arrIndex+2);
  }else{//external node
        console.log("external node: ",Arr[arrIndex]);
  }

  return Arr;
}

function calculateTree(root){
  return "we're not done yet :(";
}
export default calculateButtons;
