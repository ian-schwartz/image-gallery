import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ page, setPage }) => {
  const prevPage = (e) => {
    page === 1 ? setPage(page) : setPage(page - 1);
  };

  const nextPage = (e) => {
    setPage(page + 1);
  };

  return (
    <div className="pagination">
      <Button
        variant="light"
        size="md"
        style={{ margin: "1%" }}
        onClick={() => prevPage()}
      >
        Prev
      </Button>
      <Button
        variant="light"
        size="md"
        style={{ margin: "1%" }}
        onClick={() => nextPage()}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
