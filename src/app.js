import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import FoodCardGrid from './components/FoodCardGrid'
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    
    children: [
      {
        path: "/",
        element: <FoodCardGrid />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, {
        path: '/resmenu/:resId',
        element:<RestaurantMenu/>
      }
    ],errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= { appRouter } />);
