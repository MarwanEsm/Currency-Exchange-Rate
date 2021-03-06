import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class DateAndTime extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1 style={h1Style}>Welcome Back</h1>
        <br />
        <ShowCurrentDate style={currentDate} />
        <h2 style={h2Style}>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function ShowCurrentDate() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date().getDate();
  var d = new Date();
  const month = months[d.getMonth()];
  const year = new Date().getFullYear();
  const currentDate = date + "-" + month + "-" + year;

  return (
    <div>
      <h2 style={h2Style}>{currentDate}</h2>
    </div>
  );
}

const h1Style = {
  fontFamily: "Fantasy ",
  fontSize: 15,
  marginTop: "10%",
  margintBottom: "10%",
  // backgroundColor: "#ffff00",
  backgroundColor: "white",
  width: "100%",
};

const h2Style = {
  fontFamily: "FreeMono, monospace ",
  fontSize: 18,
  fontWeight: "bold",
  color: "#f2f2f2",
};

const currentDate = {
  marginBottom: "10%",
  color: "#f2f2f2",
};

export default DateAndTime;
