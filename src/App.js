import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ""
    };
  }

  passState = () => {
    console.log("label value", $(".label-text").text());
    this.setState({ count: $(".label-text").text() });
  };

  render() {
    console.log("parent state", this.state.count);
    return (
      <div className="App">
        <button
          onClick={this.passState}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <Counter passState={this.state.count} />
      </div>
    );
  }
}

export default App;
