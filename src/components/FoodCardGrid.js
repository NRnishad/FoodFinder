import FoodCard from './FoodCard';
import resList from '../utils/mockData'



function FoodCardGrid() {
  return (
    <div className="food-card-grid">
      {resList.map((restaurant) => (
        <FoodCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  );
}

export default FoodCardGrid;