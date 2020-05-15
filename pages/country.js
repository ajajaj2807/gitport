import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/main.scss";
import CountryDetails from "../comps/CountryDetails.js";

const Country = () => {
  const [clist, setList] = useState([]);
  const [modclist, setMList] = useState([]);
  const [sq, setSearch] = useState("");
  const [showc, setShow] = useState(false);
  const [sc, setSc] = useState("");

  const handleClick = (e) => {
    setShow(true);
    setSc(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clis = await Axios.get("https://covid19.mathdro.id/api/countries");
      setList(clis.data.countries);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let modl = clist.filter((e) => {
      return e.name.toLowerCase().includes(sq.toLowerCase()) && true;
    });

    setMList(modl);
  }, [sq]);

  useEffect(() => {}, [clist]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="cw-wrapper">
      <h2>Country Wise Data</h2>
      <input
        className="csb"
        placeholder="Start Typing Country Name"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <div className="search-result">
        {sq !== ""
          ? modclist.map((e) => {
              return (
                <a
                  onClick={() => handleClick(e.name)}
                  href="#"
                  className="clabel"
                >
                  {e.name}
                </a>
              );
            })
          : ""}
      </div>

      {showc ? <CountryDetails closeBtn={handleClose} name={sc} /> : ""}
    </div>
  );
};

export default Country;
