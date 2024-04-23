import { useEffect, useState } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "../components/Footer";

export default function BookingPage() {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("MPESA");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        if (!params.listingId) {
          throw new Error("Listing ID is missing.");
        }

        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        const listingType = data.listing.type;

        setBookingType(
          listingType === "rent" || listingType === "sale"
            ? "property"
            : "hotel"
        );
      } catch (error) {
        setError(error.message);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }

  const handleBooking = async () => {
    try {
      setLoading(true);

      // Prepare the booking details
      let bookingDetails = {
        userId: currentUser._id,
        listingId: params.listingId,
        bookingType,
        paymentMethod,
      };

      if (bookingType === "property") {
        bookingDetails = {
          ...bookingDetails,
          viewingDate: startDate,
          viewingPackage: selectedPackage,
        };
      } else if (bookingType === "hotel") {
        bookingDetails = {
          ...bookingDetails,
          checkInDate: startDate,
          checkOutDate: endDate,
        };
      }

      // Determine the booking API endpoint based on the booking type
      const bookingApiEndpoint =
        bookingType === "hotel"
          ? "/api/booking/hotel/create"
          : "/api/booking/property/create";

      // Send a POST request to the booking API endpoint
      const response = await fetch(bookingApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify(bookingDetails),
      });

      // Check if the request was successful
      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || "Booking failed");
      }

      setLoading(false);
      navigate("/booking-success");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="p-3 max-w-4xl mx-auto bg-gray-100">
        <h1 className="text-3xl font-semibold text-egyptianblue text-center my-7">
          Book Now
        </h1>
        {bookingType === "property" && (
          <div className="mt-5 mx-auto bg-white rounded-lg p-6 md:p-8 max-w-2xl">
            <h2 className="text-xl text-egyptianblue font-semibold mb-3">
              Select Viewing Date
            </h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border rounded"
            />
            {/* Viewing package selection options */}
            <div className="mt-5 mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 max-w-2xl">
              <h2 className="text-2xl text-egyptianblue font-semibold mb-5">
                Viewing Package
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="basic"
                    name="viewingPackage"
                    value="BASIC"
                    className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                    checked={selectedPackage === "BASIC"}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  />
                  <label
                    htmlFor="basic"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Basic
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="standard"
                    name="viewingPackage"
                    value="STANDARD"
                    className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                    checked={selectedPackage === "STANDARD"}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  />
                  <label
                    htmlFor="standard"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Standard
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="premium"
                    name="viewingPackage"
                    value="PREMIUM"
                    className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                    checked={selectedPackage === "PREMIUM"}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  />
                  <label
                    htmlFor="premium"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Premium
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        {bookingType === "hotel" && (
          <div className="mb-5">
            <h2 className="text-xl text-egyptianblue font-semibold mb-3">
              Select Stay Duration
            </h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="w-full p-2 border rounded"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="w-full p-2 border rounded mt-3"
            />
          </div>
        )}
        <div className="mt-5 mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 max-w-2xl">
          <h2 className="text-2xl text-egyptianblue font-semibold mb-5">
            Payment Method
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="mpesa"
                name="paymentMethod"
                value="MPESA"
                className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                checked={paymentMethod === "MPESA"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="mpesa"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                MPESA
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="PAYPAL"
                className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                checked={paymentMethod === "PAYPAL"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="paypal"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                PayPal
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="BANK"
                className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                checked={paymentMethod === "BANK"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="bank"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Bank Transfer
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="CASH"
                className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                checked={paymentMethod === "CASH"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="cash"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Cash
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            disabled={loading}
            className="mt-5 w-full bg-egyptianblue text-white px-4 py-2 rounded-md hover:bg-neonorange transition-colors duration-200 ease-in-out max-w-2xl mx-auto"
            style={{ fontSize: "1rem" }}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </div>
        {error && <p className="text-red-700 mt-3">{error}</p>}
      </div>
      <Footer />
    </main>
  );
}
