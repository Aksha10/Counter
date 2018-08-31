import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("props child", props);
    this.state = {
      countInChild: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countInChild: parseInt(nextProps.passState) + 1 });
  }

  render() {
    return (
      <div>
        <label className="label-text btn btn-primary btn-sm m-2">
          {this.state.countInChild}
        </label>
      </div>
    );
  }
}

export default Counter;
