import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    listingId: {
      type: String,
      ref: "Listing",
      required: true,
    },
    bookingType: {
      type: String,
      required: true,
    },
    listingTitle: {
      type: String,
      required: true,
    },
    viewDateTime: {
      type: String,
      required: function () {
        return this.bookingType === "property";
      },
    },
    viewingPackage: {
      type: String,
      required: function () {
        return this.bookingType === "property";
      },
    },

    paymentMethod: {
      type: String,
      required: function () {
        return this.bookingType === "property";
      },
    },
    PackageAmount: {
      type: String,
      required: function () {
        return this.bookingType === "property";
      },
    },
    checkIn: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
    },
    checkOut: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
    },
    hotelRate: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
    },
    reservationsMade: {
      type: Number,
      required: function () {
        return this.bookingType === "hotel";
      },
    },
    stayDuration: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
    },

    paymentMethod: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
    },
    amountDue: {
      type: String,
      required: function () {
        return this.bookingType === "hotel";
      },
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
