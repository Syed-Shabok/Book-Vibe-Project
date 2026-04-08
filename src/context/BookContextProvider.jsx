import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);

  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (book) => {
    if (readList.some((b) => b.bookId === book.bookId)) {
      toast.error("This book is already in your Read List.");
      return;
    }

    setReadList([...readList, book]);
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    // Why wasn't .include working?
    if (wishList.some((b) => b.bookId === book.bookId)) {
      const newList = wishList.filter((b) => b.bookId !== book.bookId);
      setWishList(newList);
    }

    toast.success(`${book.bookName} has been added to your Read List.`);
  };

  const handleAddToWishlist = (book) => {
    if (wishList.some((b) => b.bookId === book.bookId)) {
      toast.error("This book is already in your Wish List.");
      return;
    }
    if (readList.some((b) => b.bookId === book.bookId)) {
      toast.error("This book is already in your read List.");
      return;
    }

    setWishList([...wishList, book]);
    toast.success(`${book.bookName} has been added to your Wish List.`);
  };

  const data = {
    readList,
    handleMarkAsRead,
    wishList,
    handleAddToWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
