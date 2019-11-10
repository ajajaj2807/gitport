import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button className={"primary-button " + this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
