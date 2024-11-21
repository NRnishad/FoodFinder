import { useState } from "react";

const Admin = ({ name, location }) => {
  const [count] = useState(0) 
  
          return (
            <div className="card">
              <div className="card-content">
                <h1>{count }</h1>
                
                <h2 className="title">Name : {name}</h2>
                <p className="card-price">Location : {location}</p>  
              </div>
            </div>
          );
}
export default Admin