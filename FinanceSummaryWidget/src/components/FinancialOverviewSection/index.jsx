import TotalInterestBlock from "../TotalInterestBlock";
import MonthlyPaymentSection from "../MonthlyPaymentSection";
import IncomeDisplayWidget from "../IncomeDisplayWidget";
import "./style.css";

function FinancialOverviewSection() {
  return (
    <div className="flex-column-center-gap">
      <TotalInterestBlock />
      <MonthlyPaymentSection />
      <IncomeDisplayWidget />
    </div>
  );
}

export default FinancialOverviewSection;
