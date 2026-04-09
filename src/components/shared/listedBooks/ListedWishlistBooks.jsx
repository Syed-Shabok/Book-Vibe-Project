import React, { useContext } from "react";
import { BookContext } from "../../../context/BookContextProvider";

import { ImFilesEmpty } from "react-icons/im";
import ListedBookCard from "../../ui/ListedBookCard";

const ListedWishlistBooks = ({ sortType }) => {
  const { wishList } = useContext(BookContext);

  let renderList = wishList;
  if (sortType === "Rating") {
    renderList = [...wishList].sort((a, b) => a.rating - b.rating);
  } else if (sortType === "Year Published") {
    renderList = [...wishList].sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing,
    );
  } else if (sortType === "Number of Pages") {
    renderList = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
  }

  return (
    <div className="grid grid-cols-1 gap-5 my-7">
      {renderList.length === 0 ? (
        <div className="flex flex-col gap-5 items-center justify-center h-[50vh] bg-gray-100 rounded-xl">
          <ImFilesEmpty className="text-gray-500" size={50} />
          <h1 className="text-2xl md:text-3xl text-gray-500">
            Wishlist is Empty
          </h1>
        </div>
      ) : (
        renderList.map((book) => (
          <ListedBookCard key={book.bookId} book={book} />
        ))
      )}
    </div>
  );
};

export default ListedWishlistBooks;
