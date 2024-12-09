import FinancialCalculatorView from "../FinancialCalculatorView";
import "./style.css";

function MoneyManagerView() {
  return (
    <div className="financial-calculator-container">
      <div className="header-bar" />
      <FinancialCalculatorView />
    </div>
  );
}

export default MoneyManagerView;
