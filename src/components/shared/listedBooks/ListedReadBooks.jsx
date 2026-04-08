import React, { useContext } from "react";
import { BookContext } from "../../../context/BookContextProvider";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router";
import { ImFilesEmpty } from "react-icons/im";

const ListedReadBooks = () => {
  const { readList } = useContext(BookContext);

  return (
    <div className="grid grid-cols-1 gap-5 my-7">
      {readList.length === 0 ? (
        <div className="flex flex-col gap-5 items-center justify-center h-[50vh] bg-gray-100 rounded-xl">
          <ImFilesEmpty className="text-gray-500" size={50} />
          <h1 className="text-2xl md:text-3xl text-gray-500">
            Read List is Empty
          </h1>
        </div>
      ) : (
        readList.map((book) => (
          <div
            key={book.bookId}
            className="border border-gray-300 p-7 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="border border-gray-100 bg-gray-100 shadow-sm px-16 py-7 rounded-xl h-55 w-60 flex items-center justify-center">
                <img
                  src={book.image}
                  className="  rounded-md"
                  alt={`Image of ${book.bookName}`}
                />
              </div>

              <div className="space-y-3 w-full">
                <h2 className="card-title text-[1.5em] font-accent font-bold">
                  {book.bookName}
                </h2>
                <p className="">By : {book.author}</p>

                <div className="flex gap-3 items-center w-fit flex-wrap ">
                  <p className="font-bold">Tags:</p>
                  {book.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge badge-soft
                    font-medium badge-success  rounded-full border border-green-300"
                    >
                      #{tag}
                    </div>
                  ))}
                  <p className="flex items-center gap-1">
                    <CiLocationOn /> Year of Publishing: {book.yearOfPublishing}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                  <p className="flex items-center gap-1">
                    <GoPeople />
                    Publisher: {book.publisher}
                  </p>
                  <p className="flex items-center gap-1">
                    <FiBookOpen />
                    Publisher: {book.publisher}
                  </p>
                </div>

                <div className="divider w-full"></div>

                <div className="flex items-center flex-wrap gap-3 font-semibold">
                  <div className="badge badge-soft badge-info p-5 rounded-full">
                    {" "}
                    Category: {book.category}
                  </div>

                  <div className="badge badge-soft badge-warning p-5 rounded-full">
                    Rating: {book.rating}
                  </div>

                  <Link to={`/bookDetails/${book.bookId}`}>
                    <button className="btn text-[#FFFFFF] bg-[#23BE0A] p-5 rounded-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListedReadBooks;
