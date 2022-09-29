import React from "react";
import './App.css';
import './component.css';
import Example_1 from "./example-1";
import Example_2 from "./example-2";
import Example_3 from "./example-3";

export default class App extends React.Component {
  render (){
    return (
      <div className="app_container">                  
        <Example_1/> 
        <Example_2/> 
        <Example_3/> 
      </div>            
    )
  }
}
 

