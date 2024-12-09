import LoanSummaryWidget from "../LoanSummaryWidget";
import MortgageTermWidget from "../MortgageTermWidget";
import "./style.css";

function FinancialOverviewWidget1() {
  return (
    <div className="mortgage-details-container1">
      <LoanSummaryWidget />
      <MortgageTermWidget />
    </div>
  );
}

export default FinancialOverviewWidget1;
