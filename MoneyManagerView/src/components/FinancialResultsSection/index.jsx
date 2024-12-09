import TotalRateCalculator from "../TotalRateCalculator";
import MonthlyPaymentSection from "../MonthlyPaymentSection";
import IncomeDisplay from "../IncomeDisplay";
import "./style.css";

function FinancialResultsSection() {
  return (
    <div className="financial-summary-widget">
      <p className="heading-primary">Результаты</p>
      <div className="result-summary-container">
        <TotalRateCalculator />
        <MonthlyPaymentSection />
        <IncomeDisplay />
      </div>
    </div>
  );
}

export default FinancialResultsSection;
