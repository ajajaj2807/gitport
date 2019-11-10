// Under Construction

import "../styles/main.scss";
import Head from "next/head";
import Header from "../comps/Header";
import Collab from "../comps/Collab";
import HomeContent from "../comps/HomeContent";
import AllPosts from "../comps/AllPosts";
import Footer from '../comps/Footer'

const Index = () => {
  return (
    <div className="body-container">
      <Head>
        <title>Blog Under Construction</title>
        <link rel="shortcut icon" href="../static/aj-logo.svg" />
      </Head>
      <Header />
      <Collab />
      <HomeContent />
      <AllPosts />
      <Footer />
    </div>
  );
};

export default Index;
