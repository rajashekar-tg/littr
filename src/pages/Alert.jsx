import React from "react";
import { useAppContext } from "../context/AppContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
function Alert() {
  const { alertText, alertType } = useAppContext();
  return (
    <div
      className={`alert alert-${alertType}`}
      style={{
        padding: "6px",
        fontWeight: "bolder",
        textAlign: "center",
      }}
    >
      {alertText}
    </div>
  );
}

export default Alert;
