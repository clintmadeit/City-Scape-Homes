import Listing from "../models/listingModel.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json({
      success: true,
      listing,
    });
  } catch (error) {
    next(error);
  }
};