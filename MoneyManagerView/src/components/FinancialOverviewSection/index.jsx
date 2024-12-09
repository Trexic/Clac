import VehicleCostSection from "../VehicleCostSection";
import CreditTermSection from "../CreditTermSection";
import "./style.css";

function FinancialOverviewSection() {
  return (
    <div className="vehicle-details-container">
      <VehicleCostSection />
      <CreditTermSection />
    </div>
  );
}

export default FinancialOverviewSection;
