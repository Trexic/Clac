import "./style.css";

function FinancialSummaryWidget() {
  return (
    <div className="annual-rate-container">
      <div className="green-border-vertical-bar" />
      <div className="annual-interest-rate-container">
        <p className="annual-interest-rate-label">Годовая ставка:</p>
        <p className="annual-interest-rate-text-style">14.5%</p>
      </div>
    </div>
  );
}

export default FinancialSummaryWidget;
