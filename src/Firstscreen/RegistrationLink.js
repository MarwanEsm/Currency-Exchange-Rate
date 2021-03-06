import React from "react";
import { Link } from "react-router-dom";

function RegistrationLink() {
  return (
    <div>
      <h3 style={h3Style}>Don't have an account?</h3>
      <Link to="/RegistrationScreen" style={aStyle}>
        Click here to register
      </Link>
      <br />
    </div>
  );
}

const h3Style = {
  fontFamily: "Trebuchet MS, sans-serif ",
  fontSize: 13,
  marginTop: "13%",
  color: "white",
};

const aStyle = {
  fontFamily: "Trebuchet MS, sans-serif ",
  fontSize: 13,
  fontWeight: "bold",
  textDecoration: "underline",
  paddingTop: 10,
  paddingBottom: 30,
  color: "black",
  cursor: "pointer",
};

export default RegistrationLink;
