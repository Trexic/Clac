import FinancialOverviewSection from "../FinancialOverviewSection";
import "./style.css";

function FinancialResultsSection() {
  return (
    <div className="result-summary-container">
      <p className="result-heading">Результаты</p>
      <FinancialOverviewSection />
    </div>
  );
}

export default FinancialResultsSection;
