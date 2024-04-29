import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../index.css";

const EmailConfirmation = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await fetch(`/api/auth/confirm-email/${token}`);
        if (response.ok) {
          // Email confirmed successfully
          setSuccess(true);
        } else {
          // Error confirming email
          setError("An error occurred. Please try again later.");
        }
      } catch (error) {
        // Network error
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    confirmEmail();
  }, [token]);

  if (loading) {
    return <div className="centered-content">Loading...</div>;
  }

  return (
    <div className="centered-content">
      {error && <div className="error-message">Error: {error}</div>}
      {success && (
        <div className="success-message">
          <p>Email confirmed successfully!</p>
          <p>
            You can now{" "}
            <Link to="/sign-in">
              <span className="text-egyptianblue hover:text-neonorange underline">
                sign in
              </span>
            </Link>{" "}
            to your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailConfirmation;
