import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function MortgageTermWidget() {
  return (
    <div className="mortgage-term-container1">
      <p className="credit-amount-text-style">Срок ипотеки</p>
      <div className="mortgage-term-container">
        <p className="credit-amount-heading">20 лет</p>
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default MortgageTermWidget;
