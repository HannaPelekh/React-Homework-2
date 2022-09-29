import React from "react";
import Component_3 from "./component-3";
export default class Example_3 extends React.Component {
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
        <Component_3
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
 

