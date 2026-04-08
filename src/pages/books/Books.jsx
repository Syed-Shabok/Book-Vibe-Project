import React, { useContext } from "react";
import { BookContext } from "../../context/BookContextProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../components/shared/listedBooks/ListedReadBooks";
import ListedWishlistBooks from "../../components/shared/listedBooks/ListedWishlistBooks";

const Books = () => {
  const { readList, wishList } = useContext(BookContext);

  console.log("Read List", readList);
  console.log("Wish List", wishList);

  return (
    <div className="container mx-auto px-5">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks />
        </TabPanel>
        <TabPanel>
          <ListedWishlistBooks />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
