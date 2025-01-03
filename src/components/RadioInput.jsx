function RadioInput({ label, id, value, onChange }) {
  return (
    <div>
      <input
        type="radio"
        value={value}
        id={id}
        name="drone"
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;

