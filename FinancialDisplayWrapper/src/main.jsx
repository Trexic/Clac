import React, { createRoot } from "react-dom/client";
import FinancialDisplayWrapper from "./components/FinancialDisplayWrapper";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px" }} data-ignore="used only for top most containter width">
    <FinancialDisplayWrapper {...mockData} />
  </div>
);
