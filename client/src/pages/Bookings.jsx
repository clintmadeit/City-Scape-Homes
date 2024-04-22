import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "../components/Footer";

export default function BookingPage() {
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState("property"); // or "hotel"
  const [startDate, setStartDate] = useState(new Date()); // For property booking
  const [endDate, setEndDate] = useState(new Date()); // For property booking
  const [viewFirst, setViewFirst] = useState(new Date()); // For hotel booking
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("MPESA");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const handleBooking = async () => {
    try {
      setLoading(true);
      // Perform booking logic based on booking type, selected date/stays, package, and payment method
      setLoading(false);
      navigate("/booking-success"); // Redirect to success page after booking
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="p-3 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-egyptianblue text-center my-7">
          Book Now
        </h1>
        <div className="flex justify-center mb-5">
          <button
            onClick={() => setBookingType("property")}
            className={`mx-2 ${
              bookingType === "property"
                ? "bg-egyptianblue text-white"
                : "bg-gray-300 text-egyptianblue"
            } px-4 py-2 rounded`}
          >
            Property
          </button>
          <button
            onClick={() => setBookingType("hotel")}
            className={`mx-2 ${
              bookingType === "hotel"
                ? "bg-egyptianblue text-white"
                : "bg-gray-300 text-egyptianblue"
            } px-4 py-2 rounded`}
          >
            Hotel
          </button>
        </div>
        {bookingType === "property" && (
          <div className="mb-5">
            <h2 className="text-xl text-egyptianblue font-semibold mb-3">
              Select Viewing Date
            </h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border rounded"
            />
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
        <div className="mt-5">
          <h2 className="text-xl text-egyptianblue font-semibold mb-3">
            Select Viewing Package
          </h2>
          {/* Viewing package selection options */}
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="p-2 border rounded"
          >
            <option value={1}>Silver</option>
            <option value={2}>Platinum</option>
            <option value={3}>Gold</option>
          </select>
        </div>
        <div className="mt-5">
          <h2 className="text-xl text-egyptianblue font-semibold mb-3">
            Payment Method
          </h2>
          {/* Payment method selection options */}
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="MPESA">MPESA</option>
            <option value="bank">Bank Transfer/Credit/Debit Card</option>
            <option value="cash">Cash Payment</option>
          </select>
        </div>
        <button
          onClick={handleBooking}
          disabled={loading}
          className="mt-5 w-full bg-egyptianblue text-white px-4 py-2 rounded hover:bg-neonorange transition-colors duration-200 ease-in-out"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
        {error && <p className="text-red-700 mt-3">{error}</p>}
      </div>
      <Footer />
    </main>
  );
}
