import { useState } from "react";
import { useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Books() {
  const payloadData = useSelector((state) => state.booksStore[0]);
  const { query, data } = payloadData;
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  return (
    <div className="flex flex-col items-start font-serif font-semibold text-slate-700 p-5 m-auto mt-10 w-[80%]">
      <p className=" font-[500] ml-6 text-xl capitalize">{`Search Result For ${query}`}</p>
      <div className="w-full flex flex-wrap gap-5 mt-5">
        {currentItems.map((elem, ind) => (
          <BooksCard key={ind} elem={elem} />
        ))}
      </div>
      <div className="w-full">
        <Stack spacing={10}>
          <Pagination
            count={totalPages}
            page={pageNo}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default Books;
