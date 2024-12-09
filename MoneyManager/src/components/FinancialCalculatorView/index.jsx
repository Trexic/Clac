import { Button } from "@mui/base";
import FinancialServicesLayout from "../FinancialServicesLayout";
import FinancialResultsView from "../FinancialResultsView";
import "./style.css";

function FinancialCalculatorView() {
  return (
    <div className="financial-calculator-container1">
      <div className="financial-calculator-container2">
        <p className="financial-calculator-heading">Финансовый калькулятор</p>
        <FinancialServicesLayout />
        <FinancialResultsView />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="save-results-button">Сохранить результаты</Button>
      </div>
    </div>
  );
}

export default FinancialCalculatorView;
