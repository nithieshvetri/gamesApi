import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Structure from "./structure";
import Search from "./Search";
import Filter from "./Filter";


import loader from "./images/loading.gif";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const select = useRef(null);
  const category = [
    "SELECT",
    "MMORPG",
    "Shooter",
    "Strategy",
    "MOBA",
    "Racing",
    "Sports",
    "Social",
    "Card",
    "MMO",
    "Fantasy",
    "Fighting",
  ];
  const [valuefilter, setValuefilter] = useState(category[0]);
  const [result, setResult] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  // eslint-disable-next-line
  const [options, setOption] = useState([
    "Select",
    "release date",
    "alphabetical A-Z",
    "alphabetical Z-A",
  ]);
  useEffect(() => {
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        mode: "no-cors",
        headers: {
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9858a8ddd9msh6f03b7fd530eeedp158b82jsn5841cf54900c",
        },
      })
      .then((res) => {
        setResult(res.data);
        setData(res.data);
        if (res.data) {
          setLoading(true);
        }
      })
      .catch((err) => console.log(err.name));
  }, []);
  const changehandler = (e) => {
    setSortValue(e.target.value);
  };
  function sorting(){
    if (sortValue === "release date") {
      setResult([
        ...result.sort((x, y) => y.release_date.localeCompare(x.release_date)),
      ]);
    } else if (sortValue === options[2]) {
      setResult([...result.sort((x, y) => x.title.localeCompare(y.title))]);
    } else if (sortValue === options[3]) {
      setResult([...result.sort((x, y) => y.title.localeCompare(x.title))]);
    }
  }
  useEffect(() => {
    sorting();
  }, [sortValue]);


  return (
    <div>
      {!loading ? (
        <div className="loading">
          <img src={loader} alt="loading please wait" />
        </div>
      ) : (
        <>
          <div className="home-flex">

            {/* </div> */}
            <div className="d">
              <Filter
              options={options}
              changehandler={changehandler}
              sorting={sorting}
                value={valuefilter}
                setValue={setValuefilter}
                data={data}
                category={category}
                searchValue={value}
                result={result}
                setResult={setResult}
              />
            </div>
            <div style={{ flex: "1" }}>
              <Search
                data={data}
                result={result}
                setResult={setResult}
                value={value}
                setValue={setValue}
                filterValue={valuefilter}
                select={select}
              />
            </div>
          </div>
          <Structure result={result} />
        </>
      )}
    </div>
  );
};
export default Home;
