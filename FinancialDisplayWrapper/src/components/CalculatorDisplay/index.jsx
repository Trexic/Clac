import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function CalculatorDisplay({ sanitizedHtmlContent3, sanitizedHtmlContent1, htmlContent1, calculatorType }) {
  return (
    <div className="calculator-type-container">
      <p className="calculator-title-text-style">{calculatorType}</p>
      <div className="calculator-container">
        <SvgIcon3 className="svg-container" sanitizedHtmlContent3={sanitizedHtmlContent3} />
        <SvgIcon2 className="svg-container1" sanitizedHtmlContent1={sanitizedHtmlContent1} />
        <SvgIcon1 className="svg-container" htmlContent1={htmlContent1} />
      </div>
    </div>
  );
}

export default CalculatorDisplay;
