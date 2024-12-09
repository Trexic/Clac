import StylishLayout from "../StylishLayout";
import "./style.css";

function LoanSummaryWidget() {
  return (
    <div className="credit-summary-container">
      <div className="credit-amount-container">
        <p className="credit-amount-text-style">Сумма кредита</p>
        <p className="credit-amount-heading"> 2 000 000 руб</p>
      </div>
      <StylishLayout />
    </div>
  );
}

export default LoanSummaryWidget;
