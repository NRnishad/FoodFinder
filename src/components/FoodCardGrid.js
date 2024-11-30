import FoodCard ,{VegRes} from "./FoodCard";
import useFetch from "../utils/useFetch"; // Custom hook for data fetching
import Shimmer from "./Shimmer";
import Header from "./Header";
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

function FoodCardGrid() {
  const data = useFetch(API_URL); // Fetch data using the custom hook
  const [cardList, setCardList] = useState([]); // Full list of restaurants
  const [filterList, setFilterList] = useState([]); // Filtered list of restaurants
  const [searchText, setSearchText] = useState("");
let VegRest = VegRes(FoodCard)
  // Update the card list when data is fetched
  useEffect(() => {
    if (data) {
      const { infoWithStyle } =
        data.data?.cards[1]?.card?.card?.gridElements || {};
      const restaurants = infoWithStyle?.restaurants || [];
      setCardList(restaurants);
      setFilterList(restaurants);
      
    }
  }, [data]);

  // Online status check
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500">
        Please check your internet connection...
      </h1>
    );
  }

  // Filter the list based on search input
  const handleSearch = () => {
    const filteredRestaurant = cardList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filteredRestaurant);
  };

  return !data ? (
    <Shimmer />
  ) : (
    <div className="boy">
      <div>
        <Header />
      </div>
      <div>
        <div className="search ">
          <input
            type="text"
            className="search-box border-2 border-gray-300 rounded-md px-4 py-2 ml-2"
            placeholder="Search for a restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
          <button className="filter-button bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md justify-end">
            Filter
          </button>
        </div>
      </div>

      <div className="food-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filterList.map((res) =>
          res.info.veg ? (
            <VegRest key={res.info.resId} resData={res}/>
          ) : (
            <FoodCard key={res.info.resId} resData={res} />
          )
        )}
      </div>
    </div>
  );
}

export default FoodCardGrid;
