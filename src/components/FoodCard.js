function FoodCard(props) {
  const { resData } = props;
  const { id, restaurant, img, title, description, price } = resData;
  return (
    <div className="card">
      <img src={img} alt="image" className="card-image" />
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p className="card-description">{description}</p>{" "}
        <p className="card-price">{price}</p>  
      </div>
    </div>
  );
}


export default FoodCard;