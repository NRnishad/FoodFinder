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
function FoodCard() {
  return (
    <div className="card">
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/6/18766126/7e95a4eec835cbbe4958c7d24c54578a_featured_v2.jpg?output-format=webp"
        alt="image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Barbeque Nation</h2>
        <p className="card-description">
          North Indian, BBQ, Biryani, Street Food, Kebab, Beverages, Desserts
        </p>{" "}
         <p className="card-price">₹1700</p>  
      </div>
    </div>
  );
}

function FoodCardGrid() {
  return (
    <div className="food-card-grid">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
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

