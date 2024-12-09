import FinancialSummary from "../FinancialSummary";
import MonthlyPaymentSection from "../MonthlyPaymentSection";
import IncomeDisplay from "../IncomeDisplay";
import "./style.css";

function FinancialResultsView() {
  return (
    <div className="financial-summary-widget">
      <p className="result-heading">Результаты</p>
      <div className="result-summary-container">
        <FinancialSummary />
        <MonthlyPaymentSection />
        <IncomeDisplay />
      </div>
    </div>
  );
}

export default FinancialResultsView;
