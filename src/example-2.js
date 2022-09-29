import React from "react";
import Component_2 from "./component-2";
export default class Example_2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Stepan',
      age: 25,
      btn: "Click on me",
      isVisibly: false,
    };
    this.visibilityChange = this.visibilityChange.bind(this);      
  }
  visibilityChange(){        
    this.setState({
      name: 'Mykola',
      age: 30,
      isVisibly: !this.state.isVisibly,         
    })
  }  
  render (){
    return (
      <div className="example">                  
        <Component_2
          name = {this.state.name}
          age = {this.state.age} 
          btn = {this.state.btn}  
          isVisibly = {this.state.isVisibly}        
          cb={this.visibilityChange}             
        /> 
      </div>            
    )
  }
}
 

