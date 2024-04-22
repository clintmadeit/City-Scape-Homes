import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingType: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    listingId: {
      type: String,
      ref: "Listing",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    selectedPackage: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
