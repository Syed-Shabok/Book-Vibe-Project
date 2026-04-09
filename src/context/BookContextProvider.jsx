import React, { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addBookToLocalReadList,
  addBookToLocalWishList,
  getReadListFromLocalDB,
  getWishListFromLocalDB,
  removeBookFromLocalWishList,
} from "../utils/localDB";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const localReadList = getReadListFromLocalDB();
    const localWishList = getWishListFromLocalDB();

    console.log("Local Read List: ", localReadList);
    console.log("Local Wish List: ", localWishList);

    setReadList(localReadList);
    setWishList(localWishList);
  }, []);

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

      // Also remove from Wishlist in Local Storage.
      removeBookFromLocalWishList(book);
    }

    // Add to Local Storage for Persistence.
    addBookToLocalReadList(book);

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

    // Add to Local Storage for Persistence.
    addBookToLocalWishList(book);

    toast.success(`${book.bookName} has been added to your Wish List.`);
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleAddToWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
