import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/**
 * Style linking
 */
import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";

/**
 * Javascript linking
 */
import "./assets/js/jquery.slicknav.js";
import "./assets/js/bootstrap.min.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/jquery-3.3.1.min.js";

/**
 * Renders all element to the Html file, making it a single page site
 */
createRoot(document.getElementById("root-dowcument-src")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
