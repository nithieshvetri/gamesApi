import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";


const Filter = ({
  options,changehandler,
  data,
  result,
  searchValue,
  setResult,
  value,
  setValue,
  category,
}) => {
  console.log(data);
  const apiData = data;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(searchValue);
    if (value === "SELECT") {
      console.log("hello");
      setResult([
        ...apiData.filter(
          (x) =>
            x.title.toLowerCase().includes(searchValue) ||
            x.developer.includes(searchValue) ||
            x.publisher.includes(searchValue)
        ),
      ]);
    } else {
      setResult([
        ...data.filter(
          (x) =>
            (x.genre === value || value === "SELECT") &&
            (x.title.toLowerCase().includes(searchValue) ||
              x.developer.includes(searchValue) ||
              x.publisher.includes(searchValue))
        ),
      ]);
    }
  }, [value, searchValue]);

  return (
    <div>
      <br />
      <form className="flex-display">
      <Box className="drop" >
        <FormControl fullWidth>
          <Select
            id="select"
            value={value}
            onChange={handleChange}
          >
            {category.map((x, index) => {
              return (
                <MenuItem key={index} value={x}>
                  {x}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      {/* <div className="display-flex"> */}
              <Box  className="drop" >
                <label>Sort by :</label>
                <FormControl fullWidth>
                  <NativeSelect
                    id="select"
                    onChange={(e) => changehandler(e)}
                    inputProps={{
                      name: "Sorting",
                    }}
                  >
                    {
                      options
                      ? options.map((x, index) => {
                          return (
                            <option value={x} key={index}>
                              {x}
                            </option>
                          );
                        })
                      : null
                    }
                  </NativeSelect>
                </FormControl>
              </Box>
              {/* </div> */}
              <button type="reset" className="reset-button" onClick={e=>{
                setValue("SELECT")
              }}>RESET</button>
              </form>
      {/* <Structure result={result[0]?result:data} /> */}
    </div>
  );
};
export default Filter;
