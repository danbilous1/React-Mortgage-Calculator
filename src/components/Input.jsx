function Input({ label, id, inputLabel, position, value, onChange, type }) {
  return (
    <div className="input-container">
      <label style={{ margin: "5px", fontSize: "16px" }} htmlFor={id}>
        {label}
      </label>
      <div
        style={{ flexDirection: position == "right" ? "row" : "row-reverse" }}
        className="input-row"
      >
        <input
          id={id}
          value={value}
          onChange={onChange}
          type={type}
          onInput={onChange}
        />
        <div>
          <p style={{ margin: "5px" }}>{inputLabel}</p>
        </div>
      </div>
      <div className="field none">This field is required</div>
    </div>
  );
}

export default Input;
