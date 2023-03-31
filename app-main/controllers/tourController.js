const Tour = require("../models/Tour.js")


// create new tour
// export const createTour = async (req,res) =>{
  const createTour = async (req,res) =>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()

        res.status(200).json({status:true,message: "successfully created",data: savedTour})
    }
    catch(err) {
        res.status(500).json({status:false,message: "failed to create. Try again"})

    }
}

// update tour
const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({
        satus: true,
        message: "successfully updated",
        data: updatedTour,
      });
  } catch (err) {
    res.status(500).json({ satus: false, message: "failed to update" });
  }
};
// delete tour
const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      satus: true,
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ satus: false, message: "failed to delete" });
  }
};
// getsingle tour
const getsingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      satus: true,
      message: "successfully deleted",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({ satus: false, message: "not found" });
  }
};
// getAll tour
const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      satus: true,
      count: tours.length,
      message: "successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ satus: false, message: "not found" });
  }
};

// get tour by search 
const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: mawGroupSize },
    }).populate("reviews");

    res.status(200).json({
      satus: true,
      message: "successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ satus: false, message: "not found" });
  }
};

// get featured tour
const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      satus: true,

      message: "successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ satus: false, message: "not found" });
  }
};

// get tour counts
const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      satus: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({ satus: false, message: "failed to fetch" });
  }
};

module.exports = {
  getTourCount,
  getFeaturedTour,
  getTourBySearch,
  getAllTour,
  getsingleTour,
  deleteTour,
  updateTour,
  createTour,
};