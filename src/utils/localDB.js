const getReadListFromLocalDB = () => {
  const localReadList = localStorage.getItem("readList");

  if (localReadList) {
    return JSON.parse(localReadList);
  }

  return [];
};

const addBookToLocalReadList = (book) => {
  const currentBookList = getReadListFromLocalDB();

  const alreadyExists = currentBookList.find((b) => b.bookId === book.bookId);

  if (!alreadyExists) {
    currentBookList.push(book);
    localStorage.setItem("readList", JSON.stringify(currentBookList));
  }
};

const getWishListFromLocalDB = () => {
  const localWishList = localStorage.getItem("wishList");

  if (localWishList) {
    return JSON.parse(localWishList);
  }

  return [];
};

const addBookToLocalWishList = (book) => {
  const currentBookList = getWishListFromLocalDB();

  const alreadyExists = currentBookList.find((b) => b.bookId === book.bookId);

  if (!alreadyExists) {
    currentBookList.push(book);
    localStorage.setItem("wishList", JSON.stringify(currentBookList));
  }
};

const removeBookFromLocalWishList = (book) => {
  const currentBookList = getWishListFromLocalDB();

  const isInList = currentBookList.find((b) => b.bookId === book.bookId);

  if (isInList) {
    const updatedList = currentBookList.filter((b) => b.bookId !== book.bookId);

    localStorage.setItem("wishList", JSON.stringify(updatedList));
  }
};

export {
  getReadListFromLocalDB,
  addBookToLocalReadList,
  getWishListFromLocalDB,
  addBookToLocalWishList,
  removeBookFromLocalWishList,
};
