import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import useAuthentication from "./useAuthentication";

function ConnectedApp() {
  const { AuthProvider } = useAuthentication();
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
