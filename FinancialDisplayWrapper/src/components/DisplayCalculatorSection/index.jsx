import DisplayCalculatorWithData from "../DisplayCalculatorWithData";
import "./style.css";

function DisplayCalculatorSection({ calculatorDisplayDataList }) {
  return (
    <div className="calculator-section">
      <p className="header-title">Калькуляторы в работе</p>
      <DisplayCalculatorWithData calculatorDisplayDataList={calculatorDisplayDataList} />
    </div>
  );
}

export default DisplayCalculatorSection;
