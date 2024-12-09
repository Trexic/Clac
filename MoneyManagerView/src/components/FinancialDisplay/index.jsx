import "./style.css";

function FinancialDisplay() {
  return (
    <div className="annual-interest-rate-container">
      <div className="interest-rate-container">
        <div className="green-border-vertical-bar" />
      </div>
      <div className="annual-interest-rate-container1">
        <p className="annual-interest-rate-heading">Годовая ставка:</p>
        <p className="annual-interest-rate-display-style">14.5%</p>
      </div>
    </div>
  );
}

export default FinancialDisplay;
