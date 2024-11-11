import FoodCard from './FoodCard';
import resList from '../utils/mockData'
import { useState } from 'react';


function FoodCardGrid() {
  const [cardList, setCardList] = useState(resList)

  return (
    <div className="food-card-grid">
      <div>
        <button
        className="filter-button"
        onClick={() => {
          const filteredList = resList.filter((res) => res.price > 10);
          setCardList(filteredList);
        }}
      >
        filter
      </button>
      </div>
      
      {cardList.map((restaurant) => (
        <FoodCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  );
}

export default FoodCardGrid;