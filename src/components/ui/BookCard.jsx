import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`bookDetails/${book.bookId}`}
      key={book.bookId}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="bg-gray-100 py-15">
        <img
          src={book.image}
          className="h-60 rounded-lg"
          alt={`Front cover of ${book.bookName}`}
        />
      </figure>
      <div className="card-body space-y-2">
        <div className="flex gap-2 items-center flex-wrap">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft badge-success font-semibold py-4 rounded-full border border-green-300"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-accent font-bold">
          {book.bookName}
        </h2>
        <p className="text-lg font-medium">By : {book.author}</p>

        <div className="flex justify-between items-center border-t-2 border-dashed border-gray-300 pt-4 font-medium">
          <p className="text-lg">{book.category}</p>

          <div className="flex items-center gap-1">
            <p className="text-lg leading-none">{book.rating}</p>
            <FaRegStar size={19} className="inline-block" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
