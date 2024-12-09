import { Button } from "@mui/base";
import DisplayCalculatorList from "../DisplayCalculatorList";
import "./style.css";

function DisplayCalculatorWithData({ calculatorDisplayDataList }) {
  return (
    <div className="calculator-container1">
      <DisplayCalculatorList calculatorDisplayDataList={calculatorDisplayDataList} />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="add-calculator-button">Добавить калькулятор</Button>
    </div>
  );
}

export default DisplayCalculatorWithData;
