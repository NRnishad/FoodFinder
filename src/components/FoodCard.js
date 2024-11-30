import { IMG_LINK } from "../utils/constants";
function FoodCard({ resData } ) {

  const { name, cloudinaryImageId, avgRating, costForTwo } = resData.info;
  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={IMG_LINK + cloudinaryImageId}
        alt="image"
        className="card-image w-full h-48 object-cover"
      />
      <div className="card-content p-4 text-center">
        <h2 className="title text-lg font-bold text-gray-800 mb-2">{name}</h2>
        {/* <h5>{resData.info.cuisines[0]}</h5> */}
        <h3 className="title text-lg font-bold text-green-400 mb-2">{costForTwo}</h3>
        <p className="card-price text-sm text-gray-600 bg-yellow-100 inline-block px-3 py-1 rounded-full">
          ⭐ {avgRating} / 5
        </p>
       
      </div>
    </div>
  );
}



export const  VegRes = (FoodCard) => {
  return ((props) => {
    return (
      <div>
        <label className=" bg-green-500 text-white m-2 p-2 w-5 rounded-lg">Is Veg</label>
        <FoodCard {...props}/>
      </div>
    )
  })
}



export default FoodCard;
