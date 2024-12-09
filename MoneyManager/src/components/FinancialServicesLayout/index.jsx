import { Button } from "@mui/base";
import FinancialOverviewWidget1 from "../FinancialOverviewWidget1";
import FinancialInputWidget from "../FinancialInputWidget";
import FinancialOverviewWidget from "../FinancialOverviewWidget";
import "./style.css";

function FinancialServicesLayout() {
  return (
    <div className="mortgage-calculator-widget">
      <div className="financial-options-bar">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="green-button-with-border-radius">Ипотека</Button>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="green-accent-button">Автокредит</Button>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="green-accent-button">Потребительский кредит</Button>
      </div>
      <div className="loan-details-container">
        <div className="mortgage-details-container">
          <FinancialOverviewWidget1 />
          <FinancialInputWidget />
        </div>
        <FinancialOverviewWidget />
      </div>
    </div>
  );
}

export default FinancialServicesLayout;
