import React, { use } from "react";
import BookCard from "../../../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  //   console.log(books);

  return (
    <div className="my-20">
      <h2 className="text-center my-15 font-accent font-bold text-5xl">
        Books
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
