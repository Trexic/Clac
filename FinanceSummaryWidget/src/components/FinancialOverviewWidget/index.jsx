import VehicleCostDisplay from "../VehicleCostDisplay";
import MortgageTermView from "../MortgageTermView";
import InitialPaymentInput from "../InitialPaymentInput";
import "./style.css";

function FinancialOverviewWidget() {
  return (
    <div className="vehicle-details-container">
      <VehicleCostDisplay />
      <MortgageTermView />
      <InitialPaymentInput />
    </div>
  );
}

export default FinancialOverviewWidget;
