import React, { useContext } from "react";
import { BookContext } from "../../context/BookContextProvider";

const Books = () => {
  const { readList, wishList } = useContext(BookContext);

  console.log("Read List", readList);
  console.log("Wish List", wishList);

  return (
    <div>
      <h1>Books</h1>
    </div>
  );
};

export default Books;
