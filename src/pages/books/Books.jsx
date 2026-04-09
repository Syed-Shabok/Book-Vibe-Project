import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContextProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../components/shared/listedBooks/ListedReadBooks";
import ListedWishlistBooks from "../../components/shared/listedBooks/ListedWishlistBooks";
import { MdKeyboardArrowDown } from "react-icons/md";

const Books = () => {
  // const { readList, wishList } = useContext(BookContext);
  // console.log("Read List", readList);
  // console.log("Wish List", wishList);

  const [sortType, setSortType] = useState("");

  return (
    <div className="container mx-auto px-5">
      <div className="bg-gray-100 py-10 rounded-xl my-5">
        <h2 className="text-3xl font-bold text-center">Books</h2>
      </div>

      <div className="dropdown dropdown-bottom dropdown-center flex justify-center my-8">
        <div
          tabIndex={0}
          role="button"
          className="btn py-6 px-5 rounded-lg bg-[#23BE0A] text-[#FFFFFF] text-lg"
        >
          Sort by{" "}
          {sortType === "" ? <MdKeyboardArrowDown size={27} /> : sortType}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm text-lg"
        >
          <li onClick={() => setSortType("Rating")}>
            <a className="justify-center">Rating</a>
          </li>
          <li onClick={() => setSortType("Year Published")}>
            <a className="justify-center">Year Published</a>
          </li>
          <li onClick={() => setSortType("Number of Pages")}>
            <a className="justify-center">Number of Pages</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks sortType={sortType} />
        </TabPanel>
        <TabPanel>
          <ListedWishlistBooks sortType={sortType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
