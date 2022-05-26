import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import PaginationComponent from "./Pagination";

const Structure = ({ result }) => {
  const [currentpage, setCurrentPage] = useState(1);

  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      fontSize: "17px",
    },
  });

  const postPerPage = 15;
  const numberOfPages = Math.ceil(result.length / postPerPage);
  const lastindex = currentpage * postPerPage;
  const firstindex = lastindex - postPerPage;
  const currentuser = result.slice(firstindex, lastindex);
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };
  const style = useStyles();

  return (
    <div>
      <div>
        <Grid container wrap="wrap" justifyContent="center">
          {result[0]
            ? currentuser.map((item, index) => (
                <Box
                  className="grid-box"
                  key={index}
                  sx={{
                    width: 400,
                    minHeight: 300,
                    border: 1,
                    marginRight: 3,
                    my: 5,
                  }}
                >
                  <div className="card-style ">
                    {item ? (
                      <Link
                        key={index}
                        to={`details/${item.title}`}
                        state={{ item }}
                      >
                        <img
                          className="card-img"
                          style={{ width: "100%", height: 200 }}
                          alt={item.title}
                          src={item.thumbnail}
                        />
                      </Link>
                    ) : null}

                    {item ? (
                      <Box className="game-data" sx={{ pr: 2 }}>
                        <Typography
                          gutterBottom
                          className={style.root}
                          variant="body1"
                          color="text.primary"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          display="block"
                          // textAlign="center"
                          className={style.root}
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.publisher}
                        </Typography>
                        <Typography
                          display="block"
                          className={style.root}
                          // textAlign="justify"
                          aligntems="center"
                          margin="auto"
                          padding="6px"
                          variant="body3"
                          color="text.secondary"
                        >
                          {item.short_description}
                        </Typography>
                      </Box>
                    ) : (
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="100%" />
                      </Box>
                    )}
                  </div>
                </Box>
              )):<p className="no-data">No data found please enter the valid details</p>}
              
        </Grid>
      </div>
{result[0]?
      <div style={{ display: "flex", justifyContent: "center" }}>
      <PaginationComponent
        count={numberOfPages}
        paginate={paginate}
        postPerPage={postPerPage}
        variant="outlined"
      />
    </div>:null}
      <br />
      <br />
    </div>
  );
};

export default Structure;
