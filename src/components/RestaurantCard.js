import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData.data;

  return (
    <div className="res-card">
      <img
        className="res-thumb-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="res-name">{name}</h3>
      <p className="cuisines">{cuisines.join(" , ")}</p>
      <p className="rating">{avgRating} stars</p>
      <p className="delivery-time">{deliveryTime} minutes</p>
      <p className="avg_cost">Rs{costForTwo / 100} for two</p>
    </div>
  );
};

export default RestaurantCard;
