import { IMG_LINK } from "../utils/constants";
function FoodCard({ resData } ) {

  const { name, cloudinaryImageId, avgRating } = resData.info;
  return (
    <div className="card">
      <img
        src={IMG_LINK + cloudinaryImageId}
        alt="image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="title">{name}</h2>
        <h5>{resData.info.cuisines[0]}</h5>
        <p className="card-price">{avgRating}</p>  
      </div>
    </div>
  );
}

export default FoodCard;
