import React from "react";
import Button from "./Button";

export default function AllPosts() {
  return (
    <div className="collab-wrapper">
      <div className="info">
        <h1>See All</h1>
        <p className="see-all-info">
          Explore the handful of handcrafted articles.
        </p>
      </div>
      <div className="bw">
        <Button>Explore</Button>
      </div>
    </div>
  );
}
