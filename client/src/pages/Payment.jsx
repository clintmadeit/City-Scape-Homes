import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";

export default function Payment() {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      setLoading(true);
      try {
        if (!bookingId) {
          throw new Error("Booking ID is missing.");
        }

        const response = await fetch(`/api/booking/get/${bookingId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch booking details");
        }
        const data = await response.json();
        if (!data) {
          throw new Error("Booking details are missing in the response");
        }
        setBookingDetails(data);
      } catch (error) {
        console.error("Error fetching booking details:", error.message);
        setBookingDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const handlePayment = () => {
    // Implement payment logic here
    alert("Payment initiated. Please proceed with payment.");
  };

  {
    loading && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          width: "100vw",
        }}
      >
        <FadeLoader color="#f49d19" size={15} />
      </div>
    );
  }

  if (!bookingId) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          width: "100vw",
        }}
      >
        Booking ID Not Found!
      </div>
    );
  }

  if (!bookingDetails) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          width: "100vw",
        }}
      >
        Booking Details Not Found!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xl">
        <div className="px-6 py-8">
          <div className="px-6 py-4 border-b border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-semibold text-egyptianblue">
                Booking Details
              </div>
              <div className="text-sm text-gray-600">
                <strong>ID: </strong>
                {bookingDetails._id}
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 mb-4 mt-4 pb-6">
            <div className="text-lg font-semibold mb-4 text-gray-600">
              <strong>{bookingDetails.listingTitle}</strong>
            </div>
            <div className="text-sm text-gray-600 mb-2 bg-gray-100 p-2">
              <strong>
                {bookingDetails.bookingType === "property"
                  ? "Viewing Date and Time"
                  : "Check-In Date"}
                :
              </strong>{" "}
              {bookingDetails.bookingType === "property"
                ? bookingDetails.viewDateTime
                : bookingDetails.checkIn}
            </div>
            <div className="text-sm text-gray-600 mb-2 p-2">
              <strong>
                {bookingDetails.bookingType === "property"
                  ? "Viewing Package"
                  : "Check-Out Date"}
                :
              </strong>{" "}
              {bookingDetails.bookingType === "property"
                ? bookingDetails.viewingPackage
                : bookingDetails.checkOut}
            </div>
            <div className="text-sm text-gray-600 mb-2 bg-gray-100 p-2">
              <strong>Payment Method:</strong> {bookingDetails.paymentMethod}
            </div>
            <div className="text-sm text-gray-600 mb-2 p-2">
              <strong>
                {bookingDetails.bookingType === "property"
                  ? "Package Amount"
                  : "Hotel Rate"}
                :
              </strong>{" "}
              {bookingDetails.bookingType === "property"
                ? bookingDetails.PackageAmount
                : bookingDetails.hotelRate}
            </div>
            {bookingDetails.bookingType === "hotel" && (
              <div className="text-sm text-gray-600 mb-2 bg-gray-100 p-2">
                <strong>Stay Duration:</strong> {bookingDetails.stayDuration}
              </div>
            )}
            {bookingDetails.bookingType === "hotel" && (
              <div className="text-sm text-gray-600 mb-2 p-2">
                <strong>Amount Due:</strong> {bookingDetails.amountDue}
              </div>
            )}
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-egyptianblue text-white font-semibold py-3 rounded-md hover:bg-neonorange transition-colors duration-200 ease-in-out"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
