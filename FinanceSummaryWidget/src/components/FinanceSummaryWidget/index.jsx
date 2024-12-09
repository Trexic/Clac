import FinancialOverview from "../FinancialOverview";
import "./style.css";

function FinanceSummaryWidget() {
  return (
    <div className="financial-calculator-container1">
      <div className="header-bar" />
      <FinancialOverview />
    </div>
  );
}

export default FinanceSummaryWidget;
