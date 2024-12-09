import CalculatorDisplay from "../CalculatorDisplay";
import "./style.css";

function DisplayCalculatorList({ calculatorDisplayDataList }) {
  return (
    <div className="calculator-container2">
      {calculatorDisplayDataList.map((data, index) => {
        return <CalculatorDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayCalculatorList;
