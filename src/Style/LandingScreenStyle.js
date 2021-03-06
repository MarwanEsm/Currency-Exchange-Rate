import React from "react";

function LandingScreenStyle() {
  return (
    <div style={divStyle}>
      <div style={div2Style}></div>
      <div style={div1Style}></div>
    </div>
  );
}

const div1Style = {
  width: "50%",
  marginRight: "50%",
  height: "100%",
  backgroundColor: "#ffa31a",
  position: "absolute",
};

const div2Style = {
  width: "100%",
  marginLeft: "100%",
  height: "100%",
  backgroundColor: "#3B474D",
  position: "absolute",
};

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "auto",
};

export default LandingScreenStyle;
