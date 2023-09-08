import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import googleOAuthConfig from "./googleOAuthConfig";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider config={googleOAuthConfig}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
