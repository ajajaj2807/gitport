import "../styles/main.scss";
import Head from 'next/head'
import Header from "../comps/Header";
import Collab from "../comps/Collab";
import HomeContent from "../comps/HomeContent";

const Index = () => {
  return (
    <div className="body-container">
      <Head>
        <title>Blog Under Construction</title>
      </Head>
      <Header />
      <Collab />
      <HomeContent />
    </div>
  );
};

export default Index;
