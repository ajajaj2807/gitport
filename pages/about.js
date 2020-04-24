import Menu from "../comps/Menu";
import { useState, useEffect } from "react";
import "../styles/about.scss";
import Head from "next/head";

const about = () => {
  const [menu, setMenu] = useState(0);

  return (
    <div>
      <Head>
        <title> About - Ajay Yadav</title>
        <link rel="shorcut icon" href="../static/aj-logo.svg" />
      </Head>
      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        <i class="fas fa-bars"></i>
      </button>
      {menu ? <Menu close={() => setMenu(!menu)} /> : <> </>}

      <div className="about-wrapper">
        <h2>Under Construction</h2>
      </div>
    </div>
  );
};
export default about;
