import FoodCard from "./FoodCard";
import useFetch from "../utils/useFetch"; // Importing the custom hook
import Shimmer from "./Shimmer";
import Header from "./Header";
import { API_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
function FoodCardGrid() {
  const data = useFetch(API_URL); // Using the custom hook
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Parse and set filtered list when data is fetched
  if (data && filterList.length === 0) {
    const { infoWithStyle } =
      data.data?.cards[1]?.card?.card?.gridElements || {};
    setFilterList(infoWithStyle?.restaurants || []);
  }
//   const onlineStatus = useOnlineStatus() 
//   if (onlineStatus === false) {
//   return <h1> please check the internet .... </h1>
// }
  return !data ? (
    <Shimmer />
  ) : (
    <div className="boy">
      <div>
        <Header />
      </div>
      <div>
        <button
          className="filter-button"
          // Add filter logic here if needed
        >
          filter
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurant = filterList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
      </div>

      <div className="food-card-grid">
        {filterList.map((res) => {
          return <FoodCard key={res.info.resId} resData={res} />;
        })}
      </div>
    </div>
  );
}

export default FoodCardGrid;
