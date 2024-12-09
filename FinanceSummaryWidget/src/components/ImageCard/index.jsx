import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ImageCard() {
  return (
    <div className="vertical-centered-container">
      <img src="/assets/image_c6055c3d.png" alt="" className="image-container" />
      <SvgIcon1 className="svg-container" />
    </div>
  );
}

export default ImageCard;
