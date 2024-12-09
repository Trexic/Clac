import FinancialOverviewWidget from "../FinancialOverviewWidget";
import FinancialResultsSection from "../FinancialResultsSection";
import "./style.css";

function FinancialOverviewSection1() {
  return (
    <div className="vehicle-details-container">
      <FinancialOverviewWidget />
      <FinancialResultsSection />
    </div>
  );
}

export default FinancialOverviewSection1;
