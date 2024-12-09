import React, { createRoot } from "react-dom/client";
import FinanceSummaryWidget from "./components/FinanceSummaryWidget";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "393px" }} data-ignore="used only for top most containter width">
    <FinanceSummaryWidget />
  </div>
);
