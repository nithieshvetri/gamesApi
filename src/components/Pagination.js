import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent(props) {
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    props.paginate(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={props.count} onChange={handleChange} />
    </Stack>
  );
}
