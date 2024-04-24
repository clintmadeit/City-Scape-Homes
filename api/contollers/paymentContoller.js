import Payment from "../models/paymentModel.js";
import { errorHandler } from "../utils/error.js";

export const createPayment = async (req, res, next) => {
  try {
    const payment = await Payment.create(req.body);
    return res.status(201).json(payment);
  } catch (error) {
    next(error);
  }
};
