import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";

function ConsumerCreditVersion1() {
  return (
    <div className="consumer-credit-container">
      <p className="consumer-credit-title-style">Потребительский кредит Версия 1</p>
      <div className="credit-card-options-container">
        <SvgIcon1 className="svg-container" />
        <SvgIcon2 className="svg-container1" />
        <SvgIcon3 className="svg-container" />
      </div>
    </div>
  );
}

export default ConsumerCreditVersion1;
