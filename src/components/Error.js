import { useNavigate } from "react-router-dom";

const Error = () => {
          const navigate = useNavigate();
          const handleGoHome = () => {
                    navigate('/');
          }
  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
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
