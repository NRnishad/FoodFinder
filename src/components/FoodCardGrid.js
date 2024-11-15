import FoodCard from './FoodCard';
import resList from '../utils/mockData'
import { useState ,useEffect} from 'react';
import Shimmer from './Shimmer';

function FoodCardGrid() {
  const [cardList, setCardList] = useState([])
  const [filterList,setFilterList] = useState([])

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const { infoWithStyle } = json.data?.cards[1]?.card?.card?.gridElements;
   let list = infoWithStyle.restaurants
    setCardList(infoWithStyle.restaurants);
setFilterList(infoWithStyle.restaurants);

  }
   const [searchText,setSearchText]=useState('')
  
  return cardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="boy">
      <div>
        <button
          className="filter-button"
          // onClick={() => {
          //   const filteredList = resList.filter((res) => res.price > 10);
          //   setCardList(filteredList);
          // }}
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
              let filterdRestaurant = cardList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filterdRestaurant);
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