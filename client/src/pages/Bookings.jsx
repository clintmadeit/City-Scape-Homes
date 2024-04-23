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
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedPackage, setSelectedPackage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const packagePrices = {
    BASIC: 1500,
    STANDARD: 3000,
    PREMIUM: 5000,
  };

  const packages = {
    BASIC:
      "Introducing our Basic Property Showcase Package! For just Ksh. 1500, you will be helped to explore detailed information and physically visit one out of three properties of your choice. Dive into comprehensive property details and take the first step towards finding your dream home. With this package, discovering your ideal property has never been easier or more affordable.",
    STANDARD:
      "Introducing our exclusive 'Property Preview' package! For just Ksh. 3000, users gain access to a comprehensive showcase of available properties with the flexibility to explore two out of three desired attributes in detail. Whether it's scrutinizing the interior design, assessing the neighborhood amenities, or gauging the property's layout, this package empowers you to make informed decisions before committing. Experience the convenience of virtual tours and detailed descriptions, ensuring every aspect meets your preferences. Say goodbye to uncertainty and hello to confident property hunting with our Property Preview package.",
    PREMIUM:
      "Introducing our premium package, designed to cater to your specific needs! For just Ksh. 5000, this package grants you access to detailed information and physical inspection of any three properties of your choice. Whether you're seeking a cozy apartment, a spacious house, or a commercial space, our package ensures that you get firsthand insights into the properties that pique your interest. With a focus on transparency and convenience, we're here to make your property search experience as seamless as possible.",
  };

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
          viewingDate: viewDate,
          viewingPackage: selectedPackage,
          price: packagePrices[selectedPackage],
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
      } else if (!selectedPackage) {
        throw new Error("Please select a viewing package to proceed");
      } else if (!viewDate) {
        throw new Error("Please select a viewing date to proceed");
      } else if (!paymentMethod) {
        throw new Error("Please select a payment method to proceed");
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
              selected={viewDate}
              onChange={(date) => setViewDate(date)}
              className="w-full p-2 border rounded"
            />
            {/* Viewing package selection options */}
            <div className="mt-5 mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 max-w-2xl">
              <h2 className="text-2xl text-egyptianblue font-semibold mb-5">
                Viewing Package
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {Object.keys(packages).map((packageName) => (
                  <div
                    key={packageName}
                    title={packages[packageName]}
                    className="flex items-center"
                  >
                    <input
                      type="radio"
                      id={packageName}
                      name="viewingPackage"
                      value={packageName}
                      className="text-egyptianblue focus:ring-neonorange h-4 w-4 border-gray-300 rounded"
                      checked={selectedPackage === packageName}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                    />
                    <label
                      htmlFor={packageName}
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      {packageName[0] + packageName.slice(1).toLowerCase()}
                    </label>
                  </div>
                ))}
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
            {currentUser.isAdmin && (
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
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            disabled={loading}
            className="mt-5 w-full bg-egyptianblue text-white font-semibold px-4 py-2 rounded-md hover:bg-neonorange transition-colors duration-200 ease-in-out max-w-2xl mx-auto"
            style={{ fontSize: "1rem" }}
          >
            {loading ? "Completing..." : "Complete Booking"}
          </button>
        </div>
        {error && <p className="text-red-700 mt-3">{error}</p>}
      </div>
      <Footer />
    </main>
  );
}
