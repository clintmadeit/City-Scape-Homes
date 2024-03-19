import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Contact({ listing }) {
  const [management, setManagement] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchManagement = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setManagement(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchManagement();
  }, [listing.userRef]);
  return (
    <>
      {management && (
        <div className="flex flex-col gap-2">
          <p>
            Contact{" "}
            <span className="font-semibold text-neonorange">
              {management.userName}
            </span>{" "}
            for{" "}
            <span className="font-semibold text-neonorange">
              {listing.title.toLowerCase()}
            </span>
          </p>
          <textarea
            className="w-full p-3 border border-bg rounded-lg"
            placeholder="Enter your message here"
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
          >
            {`Hi ${
              management.userName
            }, I am interested in your ${listing.title.toLowerCase()} listing. Please contact me `}
          </textarea>
          <Link
            className="bg-egyptianblue text-white p-3 uppercase hover:opacity-95 rounded-lg text-center"
            to={`mailto:${management.email}?subject=Regarding ${listing.title}&body=${message}`}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

Contact.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userRef: PropTypes.string.isRequired,
  }).isRequired,
};
