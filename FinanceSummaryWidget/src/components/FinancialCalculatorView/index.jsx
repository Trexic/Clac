import { Button } from "@mui/base";
import FinancialSummaryWidget from "../FinancialSummaryWidget";
import "./style.css";

function FinancialCalculatorView() {
  return (
    <div className="financial-calculator-container">
      <p className="financial-calculator-title">Финансовый калькулятор</p>
      <div className="financial-calculator-container2">
        <div className="vertical-button-group-with-rate">
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="green-button-with-text">Ипотека</Button>
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="green-accent-button">Автокредит</Button>
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="green-accent-button">Потребительский кредит</Button>
        </div>
        <FinancialSummaryWidget />
      </div>
    </div>
  );
}

export default FinancialCalculatorView;
