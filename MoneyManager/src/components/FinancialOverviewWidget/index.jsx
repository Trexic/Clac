import "./style.css";

function FinancialOverviewWidget() {
  return (
    <div className="annual-rate-container1">
      <div className="interest-rate-container">
        <div className="green-border-left-marker" />
      </div>
      <div className="annual-rate-container">
        <p className="annual-interest-rate-label">Годовая ставка:</p>
        <p className="annual-interest-rate-display-style">9.6%</p>
      </div>
    </div>
  );
}

export default FinancialOverviewWidget;
