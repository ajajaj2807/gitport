import React from "react";
import Newsletter from "./Newsletter";
import Button from "./Button";

export default function HomeContent() {
  return (
    <div className="hc-wrapper">
      <div className="latest-wrapper">
        <div className="latest-title">LATEST</div>
        <div className="latest-posts-wrapper">
          <div className="latest-post-c">
            <h2>
              Creating Full Stack Progressive Blog App Using ReactJS and
              Firebase, FireStore
            </h2>
            <div className="author-info">by Ajay Yadav | Nov 2, 2019</div>
          </div>
          <div className="latest-post-c">
            <h2>Using Suspense and React.lazy for code-splitting in React</h2>
            <div className="author-info">by Ajay Yadav | Oct 24, 2019</div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <Newsletter />
        <div className="sidebar-login">
          <p>
            <strong>Login or Register Now</strong> to like and comment on your
            favorite posts.
          </p>
          <Button className="subs-button">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
}
