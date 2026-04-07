import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "books/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
