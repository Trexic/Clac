import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function CreditTermSection() {
  return (
    <div className="credit-term-container">
      <p className="vehicle-cost-label">Срок кредита</p>
      <div className="loan-term-container">
        <p className="price-display-bold">20 лет</p>
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default CreditTermSection;
