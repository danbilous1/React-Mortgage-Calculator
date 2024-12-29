import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import RadioInput from "./components/RadioInput";

function App() {
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const handleTermChange = (event) => setTerm(Number(event.target.value));
  const handleRateChange = (event) => setRate(Number(event.target.value));
  const handleAmountChange = (event) => setAmount(Number(event.target.value));
  const handleTypeChange = (event) => setType(event.target.value);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Mortgage Calculator</h3>
          <p
            className="clear-btn"
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
          <p>Mortgage Type</p>
          <RadioInput
            label="Repayment"
            id="repay"
            value="repayment"
            onChange={handleTypeChange}
          />
          <RadioInput
            label="Interest Only"
            id="interest"
            value="interest"
            onChange={handleTypeChange}
          />
        </div>
      </div>
      <div className="result">{payment}</div>
    </div>
  );
}

export default App;
