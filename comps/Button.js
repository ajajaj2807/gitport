import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        onSubmit={this.props.onSubmit}
        type={this.props.type}
        onClick={this.props.onClick}
        className={"primary-button " + this.props.className}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
