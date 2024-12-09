import StylishCarSection from "../StylishCarSection";
import "./style.css";

function VehicleCostSection() {
  return (
    <div className="vehicle-cost-container">
      <div className="vehicle-price-container">
        <p className="vehicle-cost-label">Стоимость автомобиля</p>
        <p className="price-display-bold"> 2 000 000 руб</p>
      </div>
      <StylishCarSection />
    </div>
  );
}

export default VehicleCostSection;
