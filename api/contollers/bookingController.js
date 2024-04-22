import Booking from "../models/bookingModel.js";
import { errorHandler } from "../utils/error.js";

export const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return errorHandler(res, 404, "Booking not found");
    }
    return res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return errorHandler(res, 404, "Booking not found");
    }
    return res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return errorHandler(res, 404, "Booking not found");
    }
    return res.status(204).json(null);
  } catch (error) {
    next(error);
  }
};
