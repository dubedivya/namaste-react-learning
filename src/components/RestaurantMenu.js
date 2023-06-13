import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { restId } = useParams();
  console.log(restId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + restId);
    const resDetails = await data.json();
    console.log(resDetails.data.cards);
    setResInfo(resDetails.data);
  };

  //Showing shimmer ui
  if (resInfo === null) return <Shimmer />;

  //Fetching restaurant info from api data
  const {
    name,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  //Fetching Menu items from api data
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="restaurantInfoWrapper">
      <div className="info-box1">
        <div className="info-box-left">
          <h1>{name}</h1>
          <p>{cuisines.join(",")}</p>
          <p>{areaName}</p>
        </div>
        <div className="info-box-right">
          <h3>{avgRatingString}</h3>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <hr />
      <div className="info-box2 menu">
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2>Menu</h2>

      {itemCards.map((item) => (
        <div className="menu-item" key={item.card.info.id}>
          <div className="item-info">
            <h3 className="item-name">{item.card.info.name}</h3>
            <p className="item-price">
              {"Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="item-description">{item.card.info.description}</p>
          </div>
          <div className="item-image">
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
              className="menu-item-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
