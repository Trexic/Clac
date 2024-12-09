import { Button } from "@mui/base";
import FinancialOverviewSection1 from "../FinancialOverviewSection1";
import "./style.css";

function FinancialSummaryView() {
  return (
    <div className="vehicle-finance-calculator-widget">
      <FinancialOverviewSection1 />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="save-results-button">Сохранить результаты</Button>
    </div>
  );
}

export default FinancialSummaryView;
