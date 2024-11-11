import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import FoodCardGrid from'./components/FoodCardGrid'


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <FoodCardGrid />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
