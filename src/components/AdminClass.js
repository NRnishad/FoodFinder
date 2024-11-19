import React from "react";
class AdminClass extends React.Component{
          constructor(props) {
            super(props)
            this.state ={
              count: 0,
              count2: 2,
            }
            
          }
          render() {
            const { name, location } = this.props
            const {count, count2} = this.state
                return (
                  <div className="card">
                    <div className="card-content">
                      <h1>{ count}</h1>
                      <h1>{ count2}</h1>
                      <h2 className="title">Name : {name}</h2>
                      <p className="card-price">Location : {location}</p>  
                    </div>
                  </div>
                );
 
          }
}
export default AdminClass;
