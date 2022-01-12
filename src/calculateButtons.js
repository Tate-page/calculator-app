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
  treeArr=calculateTree(treeArr,0);
  console.log("you made it back", treeArr[0]);
  const num=parseFloat(treeArr[0]);
  return num;
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
    let leftNodeVal="null", rightNodeVal="null",i=0;
    while(i<valueIndex){
      if(leftNodeVal==="null"){
        leftNodeVal=Arr[arrIndex].charAt(i);
      }else{
        leftNodeVal+=Arr[arrIndex].charAt(i);
      }
      i++
    }

    i=valueIndex+1;
    while(i<Arr[arrIndex].length){
      if(rightNodeVal==="null"){
        rightNodeVal=Arr[arrIndex].charAt(i);
      }else{
        rightNodeVal+=Arr[arrIndex].charAt(i);
      }
      i++
    }
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

function calculateTree(treeArr,index){
  if(isOperator(treeArr[2*index+1])===true){
    treeArr=calculateTree(treeArr,2*index+1);
  }

  if(isOperator(treeArr[2*index+2])===true){
    treeArr=calculateTree(treeArr,2*index+1);
  }

  var num1=parseFloat(treeArr[2*index+1]);
  var num2=parseFloat(treeArr[2*index+2]);

  if(treeArr[index]==="*"){
    treeArr[index]=num1*num2;
  }else if(treeArr[index]==="/"){
    treeArr[index]=num1/num2;
  }else if(treeArr[index]==="+"){
    console.log("right spot");
    treeArr[index]=num1+num2;
    console.log("ans: ",treeArr[index]);
  }else if(treeArr[index]==="-"){
    treeArr[index]=num1-num2;
  }
  return treeArr;
}

function isOperator(temp){
  if(temp==="+" || temp==="-" || temp==="*" || temp==="/"){
    return true;
  }else {
    return false;
  }
}
export default calculateButtons;
