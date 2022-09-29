import React from "react";
export default class Component_2 extends React.Component {
  render (){
    return (
        <>
            <div className="text_container">
            {this.props.isVisibly ?
                <p className="text"> Name: {this.props.name}, age: {this.props.age}</p> : null}
            </div>
            <button className="btn" onClick={this.props.cb}>
                {this.props.btn}
            </button>
        </>
    )
  }
}