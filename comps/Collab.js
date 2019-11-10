import React from "react";
import Button from "./Button";

export default function Collab() {
  return (
    <div className="collab-wrapper">
      <div className="info">
        <h2>Want to see your article here?</h2>
        <p>Contact me to discuss the details, I'd love to host you here.</p>
      </div>
      <div className="bw">
        <Button>Contact Now</Button>
      </div>
    </div>
  );
}
