const Admin = ({name , location })=> {
          return (
            <div className="card">
              <div className="card-content">
                                        <h2 className="title">Name : { name}</h2>
                                        <p className="card-price">Location : { location}</p>  
              </div>
            </div>
          );
}
export default Admin