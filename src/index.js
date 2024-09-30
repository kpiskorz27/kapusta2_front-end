import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/storeK"; // Import the configured Redux store
import { App } from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap the app with the Provider */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
