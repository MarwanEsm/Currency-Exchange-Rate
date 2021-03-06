import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CurrenciesContext } from "../Components/CurrenciesContext";

function Converter({ searchedCurrency }) {
  const { exchangeRates } = useContext(CurrenciesContext);

  const [fromCurrency, setFromCurrency] = useState("");
  const updateInputValue = (event) => {
    const inValue = event.target.value;
    const newInValue = inValue.toLocaleString();
    setFromCurrency(newInValue);
  };

  const [toCurrency, setToCurrency] = useState();
  const convert = () => {
    const selectedRate = exchangeRates.rates[searchedCurrency];
    const resultValue = fromCurrency * selectedRate;
    setToCurrency(resultValue);
    console.log(resultValue);
  };

  //it didn't work
  // function numberWithCommas(x) {

  //   if (x){
  //   return x.toString().replace(/\B(?=(\d{15})+(?!\d))/g, ",");
  //   }
  // }

  return (
    <div style={divStyle}>
      <div>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            value={
              /*parsefloat didn't work*/ fromCurrency /*toFixed(6) does not allow more numbers to be written */
            }
            onChange={updateInputValue}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <Button
          variant="warning"
          type="convert"
          style={buttonStyle}
          onClick={convert}
        >
          Convert
        </Button>
      </div>
      <br />

      <div>
        <div className="input-group">
          <p style={pStyle}>{toCurrency}</p>
        </div>
      </div>
      <br />
    </div>
  );
}

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
};

const buttonStyle = {
  marginTop: 30,
  marginBottom: 10,
  fontFamily: "Fantasy ",
  backgroundColor: "yellow",
};

const inputStyle = {
  border: "bold",
  borderColor: "black",
  fontFamily: "Fantasy ",
};

const pStyle = {
  fontFamily: "Fantasy ",
};

export default Converter;
