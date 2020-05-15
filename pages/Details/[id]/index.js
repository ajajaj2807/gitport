import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/main.scss";
import Loading from "../../../comps/Loading";

const Details = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const cdata = await axios.get(`https://covid19.mathdro.id/api/${id}`);
      setData(cdata.data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const sorted = data.sort((a, b) => {
      return a.id - b.id;
    });
    setData(sorted);
  }, [data, id]);

  if (loading) {
    return (
      <div className="loader-style">
        <Loading />
      </div>
    );
  }

  return (
    <div className="details-wrapper">

      <span className="details-title"> {id} Cases</span>
      {data ? (
        <div className="list-cont">
          {data.map((c) => {
            return (
              <div className="list-big">
                <span className="country-name">
                  {c.provinceState ? c.provinceState + ", " : ""}{" "}
                  {c.countryRegion}
                </span>
                <div className="count-w">
                  <span className="count-c">{c[id]}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Details;
