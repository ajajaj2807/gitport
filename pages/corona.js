import { useState, useEffect } from "react";
import "../styles/main.scss";
import axios from "axios";
import Card from "../comps/Card.js";
import Loading from "../comps/Loading";

const API_URL = "https://covid19.mathdro.id/api";

const Corona = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cdata = await axios.get(API_URL);

      const lu = Date(Date.parse(cdata.data.lastUpdate));

      setData({
        confirmed: cdata.data.confirmed.value,
        recovered: cdata.data.recovered.value,
        deaths: cdata.data.deaths.value,
        countries: cdata.data.countries,
        daily: cdata.data.dailySummary,
        image: cdata.data.image,
        lastUpdate: lu,
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  if (loading) {
    return (
      <div className="loader-style">
        {" "}
        <Loading />{" "}
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="title">Live Corona Tracker </h2>
      <span className="lu-text">Last Updated: {data.lastUpdate} </span>

      <a className="cw-link" href={`/country`}>
        View Country Wise Details
      </a>

      <div className="cards-wrapper">
        <Card name="confirmed" count={data.confirmed} />
        <Card name="recovered" count={data.recovered} />
        <Card name="deaths" count={data.deaths} />
      </div>
    </div>
  );
};

export default Corona;
