import React from "react";
import bannerImg from "../../../../assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-27 rounded-3xl mt-10">
      <div className="hero-content flex gap-20 xl:gap-50 flex-col lg:flex-row-reverse w-[90%] justify-between">
        <img src={bannerImg} className="xl:mr-10 " />
        <div className="space-y-10">
          <h1 className="text-6xl font-bold font-accent">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-[#FFFFFF] rounded-md py-7 px-6 text-lg">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
