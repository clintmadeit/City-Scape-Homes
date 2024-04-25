import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Payment() {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await fetch(`/api/booking/get/${bookingId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch booking details");
        }
        const data = await response.json();
        setBookingDetails(data.booking);
      } catch (error) {
        console.error("Error fetching booking details:", error.message);
      }
    };
    fetchBookingDetails();
  }, [bookingId]);

  console.log(bookingId);

  const handlePayment = () => {
    // Implement payment logic here
    alert("Payment initiated. Please proceed with payment.");
  };

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-egyptianblue mb-8">
        Payment Details
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-egyptianblue mb-4">
          Booking Information
        </h2>
        <p>
          <strong>Booking ID:</strong> {bookingDetails._id}
        </p>
        <p>
          <strong>Listing ID:</strong> {bookingDetails.listingId}
        </p>
        <p>
          <strong>Listing Title:</strong> {bookingDetails.listingTitle}
        </p>
        {bookingDetails.bookingType === "property" && (
          <div>
            <p>
              <strong>Viewing Date and Time:</strong>{" "}
              {bookingDetails.viewDateTime}
            </p>
            <p>
              <strong>Viewing Package:</strong> {bookingDetails.viewingPackage}
            </p>
            <p>
              <strong>Payment Method:</strong> {bookingDetails.paymentMethod}
            </p>
            <p>
              <strong>Package Amount:</strong> {bookingDetails.PackageAmount}
            </p>
          </div>
        )}
        {bookingDetails.bookingType === "hotel" && (
          <div>
            <p>
              <strong>Check-In Date:</strong>{" "}
              {new Date(bookingDetails.checkIn).toLocaleDateString()}
            </p>
            <p>
              <strong>Check-Out Date:</strong>{" "}
              {new Date(bookingDetails.checkOut).toLocaleDateString()}
            </p>
            <p>
              <strong>Hotel Rate:</strong> {bookingDetails.hotelRate}
            </p>
            <p>
              <strong>Stay Duration:</strong> {bookingDetails.stayDuration}{" "}
              night(s)
            </p>
            <p>
              <strong>Payment Method:</strong> {bookingDetails.paymentMethod}
            </p>
            <p>
              <strong>Amount Due:</strong> {bookingDetails.amountDue}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePayment}
          className="bg-egyptianblue text-white font-semibold px-4 py-2 rounded-md hover:bg-neonorange transition-colors duration-200 ease-in-out"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
