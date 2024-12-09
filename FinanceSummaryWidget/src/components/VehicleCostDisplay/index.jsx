import ImageCard from "../ImageCard";
import "./style.css";

function VehicleCostDisplay() {
  return (
    <div className="vehicle-price-container1">
      <div className="vehicle-price-container">
        <p className="vehicle-price-label">Стоимость автомобиля</p>
        <p className="price-text-bold"> 2 000 000 руб</p>
      </div>
      <ImageCard />
    </div>
  );
}

export default VehicleCostDisplay;
