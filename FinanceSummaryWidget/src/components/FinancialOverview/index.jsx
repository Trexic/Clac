import FinancialCalculatorView from "../FinancialCalculatorView";
import FinancialSummaryView from "../FinancialSummaryView";
import "./style.css";

function FinancialOverview() {
  return (
    <div className="financial-calculator-container3">
      <FinancialCalculatorView />
      <FinancialSummaryView />
    </div>
  );
}

export default FinancialOverview;
