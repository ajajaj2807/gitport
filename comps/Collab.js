import React from "react";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

export default function Collab() {
  const [contact, setcontact] = useState(0);

  return (
    <div className="collab-wrapper">
      <div className="info">
        <h2>Want to see your article here?</h2>
        <p>Contact me to discuss the details, I'd love to host you here.</p>
      </div>
      {contact ? <Modal close={() => setcontact(!contact)} /> : <> </>}
      <div className="bw">
        <Button onClick={() => setcontact(!contact)}>Contact Now</Button>
      </div>
    </div>
  );
}
