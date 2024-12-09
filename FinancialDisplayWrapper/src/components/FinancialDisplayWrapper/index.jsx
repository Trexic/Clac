import FinancialDisplaySection from "../FinancialDisplaySection";
import "./style.css";

function FinancialDisplayWrapper({ calculatorDisplayDataList }) {
  return (
    <div className="calculator-app-container">
      <div className="green-header-bar" />
      <FinancialDisplaySection calculatorDisplayDataList={calculatorDisplayDataList} />
    </div>
  );
}

export default FinancialDisplayWrapper;
