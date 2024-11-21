import React from "react";
class AdminClass extends React.Component{
          constructor(props) {
            super(props);
            this.state = {
              count: 0,
              count2: 2,
              Api :{},
            };
            

            
  }
  
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json()
    console.log(json)
    this.setState({ Api: json });
  }
          render() {
            const { name, location } = this.props
            const {count,Api} = this.state
                return (
                  <div className="card">
                    <div className="card-content">
                      <h1>{count}</h1>
                      <button
                        onClick={() => {
                          this.setState({
                            count: this.state.count + 1,
                          });
                        }}
                      >
                        count
                      </button>
                      <h2 className="title">Name : {name}</h2>
                      <h2 className="title">Name from api : {Api.name}</h2>
                      <p className="card-price">Location : {location}</p>  
                    </div>
                  </div>
                );
 
          }
}
export default AdminClass;
