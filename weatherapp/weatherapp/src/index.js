import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { weatherServer } from "./server";

if (process.env.NODE_ENV === "development") {
  weatherServer();
}
//deprecated
//ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
