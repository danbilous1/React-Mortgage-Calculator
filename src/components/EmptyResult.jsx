function EmptyResult() {
  return (
    <div
      className="empty-state"
      style={{ textAlign: "center", padding: "10px" }}
    >
      <img
        src="./illustration-empty.svg"
        alt="Empty illustration"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h2>Results shown here</h2>
      <p>
        Complete the form and click "calculate repayments" to see what your
        monthly payments would be.
      </p>
    </div>
  );
}

export default EmptyResult;
