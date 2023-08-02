import React from "react";
import "../index.css"
import {
  MDBFooter,
  MDBIcon
} from "mdb-react-ui-kit";

export function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white bottom footer">
    
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <MDBIcon fab icon="whatsapp" />
        <MDBIcon fab icon="whatsapp-square" />© 2023-2024 Harsh Enterprises
      </div>
    </MDBFooter>
  );
}
