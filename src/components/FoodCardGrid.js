import FoodCard from './FoodCard';
import resList from '../utils/mockData'
import { useState ,useEffect} from 'react';
import Shimmer from './Shimmer';

function FoodCardGrid() {
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const { infoWithStyle } = json.data?.cards[1]?.card?.card?.gridElements;
    console.log("hi"+infoWithStyle.restaurants);
    setCardList(infoWithStyle.restaurants);

  }
  
  if (cardList.length === 0) {
    return <Shimmer/>
  }
    return (
      <div className="food-card-grid">
        <div>
          <button
          // className="filter-button"
          // onClick={() => {
          //   const filteredList = resList.filter((res) => res.price > 10);
          //   setCardList(filteredList);
          // }}
          >
            filter
          </button>
        </div>

        {cardList.map((res) => {
          return <FoodCard key={res.info.resId} resData={res} />;
        })}
      </div>
    );
}

export default FoodCardGrid;