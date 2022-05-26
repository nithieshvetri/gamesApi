import React, { useEffect } from "react";

const Search = ({
  data,
  filterValue,
  setResult,
  result,
  value,
  setValue,
  select,
}) => {
  const apiData = data;
  useEffect(() => {
    console.log(value);
    if (value === "" && filterValue==='SELECT') {
      setResult([...apiData]);
    } 
    else if(value==="" && filterValue!=="SELECT"){
      setResult([...data.filter(x=>x.genre===filterValue)])
    }
    else {
      setResult([
        ...data.filter(
          (x) =>
            (filterValue === "SELECT" || x.genre === filterValue) &&
            (x.title.toLowerCase().includes(value) ||
              x.developer.includes(value) ||
              x.publisher.includes(value))
        ),
      ]);
    }
  }, [value]);

  return (
    <div className="input-field" >
      <input
        type="text"
        value={value}
        placeholder="Search by Keywords"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
