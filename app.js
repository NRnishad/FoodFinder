import React from "react";
import ReactDOM from 'react-dom/client'

const Header = () => (
  <div className="header">
    <div className="log-container">
      <img
        className="log"
        src="https://play-lh.googleusercontent.com/R1TYyE-34iv_Rt_FsCXUeCSqcZXOOdMlNaGJ72gN1LoLltz47-ix6MFbsG0JRx4RVg"
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const resList = [
  {
    id: 1,
    restaurant: "The Gourmet Kitchen",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idyyiqhwrqwgd76m1mfo",
    title: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    price: 12.99,
  },
  {
    id: 2,
    restaurant: "The Burger House",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ecyii1wuqcghrfyu7ey5",
    title: "Classic Cheeseburger",
    description:
      "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles.",
    price: 8.49,
  },
  {
    id: 3,
    restaurant: "Taco Fiesta",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udc9hw0kemocqqrritkl",
    title: "Fish Tacos",
    description:
      "Fresh fish tacos served with cabbage slaw, lime crema, and pico de gallo.",
    price: 9.99,
  },
  {
    id: 4,
    restaurant: "Sushi Delight",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iqieogwjwckyvubdqzcn",
    title: "Salmon Sashimi",
    description:
      "Freshly sliced salmon sashimi served with wasabi and soy sauce.",
    price: 14.99,
  },
  {
    id: 5,
    restaurant: "Green Bites",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oxycaeptd1bies8gdjyt",
    title: "Avocado Toast",
    description:
      "Crispy toast topped with smashed avocado, cherry tomatoes, and arugula.",
    price: 7.49,
  },
  {
    id: 6,
    restaurant: "Pizzeria Roma",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/viinmy4rjv3yurgfwbbr",
    title: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    price: 10.99,
  },
  {
    id: 7,
    restaurant: "Bistro Bon Appetit",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70b9cb98b04d773417b77ee3c73910c9",
    title: "French Onion Soup",
    description:
      "Traditional soup topped with a layer of melted cheese and croutons.",
    price: 6.99,
  },
  {
    id: 8,
    restaurant: "Vegan Haven",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ihdieablaqorjjtyiwd9",
    title: "Quinoa Salad",
    description:
      "Healthy quinoa salad with cucumber, cherry tomatoes, and avocado.",
    price: 9.49,
  },
  
];



function FoodCard(props) {
          const { resData } = props
          const {id,restaurant,img,title,description,price}=resData
  return (
    <div className="card">
      <img src={img} alt="image" className="card-image" />
      <div className="card-content">
        <h2 className= 'title'>{title}</h2>
        <p className="card-description">{description}</p>{" "}
        <p className="card-price">{price}</p>  
      </div>
    </div>
  );
}
 
function FoodCardGrid() {
  return (
    <div className="food-card-grid">
                      {resList.map((restaurant) => (
               <FoodCard key={restaurant.id} resData={restaurant} />
     ))}
                      
     
    </div>
  );
}


const AppLayout = () => {
          return (
                    <div className="app">
                              <Header />
                              <FoodCardGrid/>
                    </div>
          )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)

