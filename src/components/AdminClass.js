import React from "react";
class AdminClass extends React.Component{
          constructor(props) {
                    super(props)
          }
          render() {
                    const {name, location } = this.props
                return (
                  <div className="card">
                    <div className="card-content">
                                              <h2 className="title">Name : {name}</h2>
                                              <p className="card-price">Location :  { location}</p>  
                    </div>
                  </div>
                );
 
          }
}
export default AdminClass;
