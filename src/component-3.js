import React from "react";
export default class Component_3 extends React.Component {
  render (){
    return (
        <>
          <div className="text_container">
            {this.props.isVisibly ? 
            <p className="text"> Name: {this.props.name}, age: {this.props.age}</p>: ""}
          </div>
          <button className="btn" onClick={this.props.cb}>
            {this.props.isVisibly ? "hide" : "show"}
          </button>
        </>
    )
  }
}