import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

let PageSize = 10;
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // const currentData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  //   // eslint-disable-next-line
  // }, [currentPage]);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentData = data.slice(firstPageIndex, lastPageIndex);

  return (
    <>
      <div className="main-app">
        {currentData?.map((todo, index) => (
          <p key={index}>{todo?.title}</p>
        ))}
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default App;
