import React from "react";
import Component_1 from "./component-1";
export default class Example_1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Stepan',
      age: 25,
      btn: "Click on me",
      isVisibly: false,
    };
    this.textChange = this.textChange.bind(this);      
  }
  textChange(){          
    this.setState({
      name: 'Mykola',
      age: 30,  
      isVisibly: this.state.isVisibly,     
    })
  }  
  render (){
    return (
      <div className="example">                  
        <Component_1
          name = {this.state.name}
          age = {this.state.age} 
          btn = {this.state.btn}          
          cb={this.textChange}               
        /> 
      </div>            
    )
  }
}
 

