import { Input } from "@mui/base";
import "./style.css";

function FinancialInputWidget() {
  return (
    <div className="fullwidth-container">
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input
        slotProps={{
          root: { className: "green-text-container" },
          input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Первонаальный взнос", type: "text" },
        }}
      />
    </div>
  );
}

export default FinancialInputWidget;
