import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
          const err = useRouteError()
          const navigate = useNavigate();
          const handleGoHome = () => {
                    navigate('/');
          }
          console.log(err)
  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <h1 className="error-code">{err.status}</h1>
        <h2 className="error-message">{err.statusText}</h2>
        <p className="error-description">
          The page you're looking for doesn't exist. It might have been removed
          or the URL might be incorrect.
        </p>
        <button className="error-button" onClick={handleGoHome}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
