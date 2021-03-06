import * as React from "react";
import * as ReactDOM from "react-dom";
import { Name } from "./Name";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), emoji: "<3", name: "" };
  }

  componentDidMount() {
    // this is used so that you can modify/kill a timer
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <div>
          <label>Enter your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(el) => this.setState({ name: el.target.value })}
          />
        </div>
        <Name name={this.state.name} />
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
