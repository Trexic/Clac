import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function MortgageTermView() {
  return (
    <div className="credit-term-container1">
      <p className="vehicle-price-label">Срок кредита</p>
      <div className="credit-term-container">
        <p className="price-text-bold">20 лет</p>
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default MortgageTermView;
