import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="Search">
      <input type="text" name="Search" value="" placeholder="" />
      <input type="submit" name="Search" value="Search" />
    </div>
    <div className="res-card-container">
      {resList.map((resData) => (
        <RestaurantCard key={resData.data.id} resData={resData} />
      ))}
    </div>
  </div>
);

export default Body;
