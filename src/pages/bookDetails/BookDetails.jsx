import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContextProvider";

const BookDetails = () => {
  const { bookId: selectedBookId } = useParams();
  //   console.log(selectedBookId);

  const books = useLoaderData();
  const selectedBook = books.find(
    (book) => book.bookId === Number(selectedBookId),
  );
  //   console.log(selectedBook);

  const { handleMarkAsRead, handleAddToWishlist } = useContext(BookContext);

  return (
    <div className="card lg:card-side bg-base-100 container mx-auto my-15 grid grid-cols-2 gap-5">
      <figure className="p-30 bg-gray-100 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src={selectedBook.image}
            className="h-150 rounded-lg"
            alt={`Front of ${selectedBook.bookName}`}
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[2.9em] font-accent font-bold">
          {selectedBook.bookName}
        </h2>
        <p className="text-xl font-medium">By : {selectedBook.author}</p>

        <div className="divider"></div>

        <p className="text-xl font-medium">{selectedBook.category}</p>

        <div className="divider"></div>

        <p className="text-lg">
          <span className="font-bold">Review </span> {selectedBook.review}
        </p>
        <br />
        <div className="flex gap-2 items-center w-fit flex-wrap text-lg">
          <p className="font-bold">Tags:</p>
          {selectedBook.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft badge-success font-semibold py-4 rounded-full border border-green-300"
            >
              #{tag}
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <table className="border-separate border-spacing-y-4 w-fit text-lg">
          <tbody className="space-y-10">
            {/* row 1 */}
            <tr>
              <td className="pr-15">Number of Pages:</td>
              <td className="font-bold">{selectedBook.totalPages}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="pr-15">Publisher:</td>
              <td className="font-bold">{selectedBook.publisher}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="pr-15">Year of Publishing:</td>
              <td className="font-bold">{selectedBook.yearOfPublishing}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="pr-15">Rating:</td>
              <td className="font-bold">{selectedBook.rating}</td>
            </tr>
          </tbody>
        </table>

        <div className="card-actions mt-5 space-x-2">
          <button
            onClick={() => handleMarkAsRead(selectedBook)}
            className="btn text-lg font-medium py-6 px-6 rounded-lg"
          >
            Mark as Read
          </button>

          <button
            onClick={() => handleAddToWishlist(selectedBook)}
            className="btn text-[#FFFFFF] bg-[#59C6D2] text-lg py-6 px-6 rounded-lg"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
