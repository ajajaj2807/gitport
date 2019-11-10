import React from "react";
import Button from './Button'

export default function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <h2>Subscribe to the Newsletter</h2>
      <p>to get the latest articles delivered straight to your inbox</p>
      <div className="input-wrapper nmi">
        <input type="text" placeholder="ajajaj2807@gmail.com"></input>
      </div>
      <Button className="subs-button">
          Subscribe Now
      </Button>
      <p className="spam-text">I won't spam you, Promise.</p>
    </div>
  );
}
