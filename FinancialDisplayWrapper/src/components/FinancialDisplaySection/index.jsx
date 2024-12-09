import DisplayCalculatorSection from "../DisplayCalculatorSection";
import ArchiveSection from "../ArchiveSection";
import "./style.css";

function FinancialDisplaySection({ calculatorDisplayDataList }) {
  return (
    <div className="calculator-section-container">
      <div className="calculator-section-container1">
        <DisplayCalculatorSection calculatorDisplayDataList={calculatorDisplayDataList} />
        <ArchiveSection />
      </div>
    </div>
  );
}

export default FinancialDisplaySection;
