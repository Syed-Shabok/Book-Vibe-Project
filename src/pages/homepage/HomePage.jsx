import React from "react";
import Banner from "../../components/shared/navbar/homePage/Banner";
import AllBooks from "../../components/shared/navbar/homePage/AllBooks";

const HomePage = () => {
  return (
    <div className="container mx-auto px-5">
      <Banner />
      <AllBooks />
    </div>
  );
};

export default HomePage;
