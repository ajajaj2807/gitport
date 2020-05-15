import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import { useRouter } from "next/router";
import Loading from "./Loading";

const CountryDetails = ({ name, closeBtn }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    closeBtn();
  };

  useEffect(() => {
    const fetchData = async () => {
      const cdata = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${name}`
      );
      const lu = Date(Date.parse(cdata.data.lastUpdate));
      setData(cdata.data, { lastUpdate: lu });
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return (
      <div className="cd-wrapper">
        <Loading />
      </div>
    );
  }

  return (
    <div className="cd-wrapper">
      <h2 className="cd-title">{name}</h2>
      <span className="lu-text">Last Updated: {data.lastUpdate} </span>
      <div className="close-btn" onClick={handleClose}>
        X
      </div>
      <div className="cd-dw">
        <Card
          type="country"
          name="confirmed"
          count={data.confirmed ? data.confirmed.value : ""}
        />
        <Card
          type="country"
          name="recovered"
          count={data.recovered ? data.recovered.value : ""}
        />
        <Card
          type="country"
          name="deaths"
          count={data.deaths ? data.deaths.value : ""}
        />
      </div>
    </div>
  );
};

export default CountryDetails;
