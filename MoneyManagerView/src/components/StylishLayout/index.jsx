import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function StylishLayout() {
  return (
    <div className="vertical-centered-flex-container">
      <div className="green-box-with-text">
        <div className="green-bar" />
        <div className="horizontal-box-list-item" />
      </div>
      <SvgIcon1 className="svg-container" />
    </div>
  );
}

export default StylishLayout;
