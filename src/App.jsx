import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import RadioInput from "./components/RadioInput";
import EmptyResult from "./components/EmptyResult";

function App() {
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const handleTermChange = (event) => setTerm(Number(event.target.value));
  const handleRateChange = (event) => setRate(Number(event.target.value));
  const handleAmountChange = (event) => setAmount(Number(event.target.value));
  const handleTypeChange = (event) => setType(event.target.value);

  const [payment, setPayment] = useState(0);

  function calculatePayment() {
    const r = rate / 100 / 12;

    if (type == "interest") {
      const monthlyPayment = amount * r;
      setPayment(monthlyPayment);
    } else {
      const monthlyPayment =
        amount * ((r * (1 + r) ** (12 * term)) / ((1 + r) ** (12 * term) - 1));
      setPayment(monthlyPayment);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        width: "900px",
        borderRadius: "25px",
        overflow: "hidden",
        marginLeft: "calc(50vw - 450px)",
        boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          padding: "40px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0",
            margin: "0",
          }}
        >
          <h3 style={{ margin: "0" }}>Mortgage Calculator</h3>
          <p
            className="clear-btn"
            style={{
              color: "#007bff",
              cursor: "pointer",
              fontSize: "14px",
              margin: "0", // Ensure no default margin
            }}
            onClick={() => {
              setTerm(0);
              setRate(0);
              setAmount(0);
            }}
          >
            Clear all
          </p>
        </div>

        <Input
          id="amount"
          label="Mortgage Amount"
          inputLabel="$"
          value={amount}
          onChange={handleAmountChange}
          type="number"
        />

        <div className="container">
          <Input
            id="term"
            label="Mortgage Term"
            inputLabel="years"
            position="right"
            value={term}
            onChange={handleTermChange}
            type="number"
          />
          <Input
            id="rate"
            label="Interest Rate"
            inputLabel="%"
            position="right"
            value={rate}
            onChange={handleRateChange}
            type="number"
          />
        </div>

        <div>
          <p style={{ fontSize: "16px", margin: "8px" }}>Mortgage Type</p>
          <RadioInput
            style={{ fontSize: "16px" }}
            label="Repayment"
            id="repay"
            value="repayment"
            onChange={handleTypeChange}
          />
          <RadioInput
            style={{ fontSize: "16px" }}
            label="Interest Only"
            id="interest"
            value="interest"
            onChange={handleTypeChange}
          />
        </div>

        <button className="button" onClick={calculatePayment}>
          <img src="./icon-calculator.svg" />
          <span>Calculate Repayments</span>
        </button>
      </div>
      <div
        className="result"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontSize: "24px",
          fontWeight: "bold",
          color: "white",
          borderRadius: "0px 0px 0px 70px",
          padding: "20px",
          backgroundColor: "var(--slate900)",
        }}
      >
        {payment ? <div>${payment.toFixed(2)}</div> : <EmptyResult />}
      </div>
    </div>
  );
}

export default App;

