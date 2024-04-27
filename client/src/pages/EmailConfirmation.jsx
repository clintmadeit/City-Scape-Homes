// EmailConfirmation.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmailConfirmation = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await fetch(`/api/confirm-email/${token}`, {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          setSuccess(true);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    confirmEmail();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {success && (
        <div>
          <p>Email confirmed successfully!</p>
          <p>
            You can now <Link to="/sign-in">sign in</Link> to your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailConfirmation;
