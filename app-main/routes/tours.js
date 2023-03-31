const  { createTour, deleteTour, getAllTour, getFeaturedTour, getsingleTour, getTourBySearch, getTourCount, updateTour } =require("../controllers/tourController");
// import { verifyAdmin } from "../utils/verifyToken";
const verifyAdmin  = require("../utils/verifyToken");

const Tour = require("../models/Tour.js");


const express = require("express");
const router = require("express").Router();


// create new tour
// router.post("/",verifyAdmin ,createTour)
router.post("/",async (req,res) =>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()

        res.status(200).json({status:true,message: "successfully created",data: savedTour})
    }
    catch(err) {
        res.status(500).json({status:false,message: "failed to create. Try again"})

    }
})

// update tour
router.put("/:id", updateTour);
// delete tour
router.delete("/:id", deleteTour);
// get single tour
// router.post("/:id", getsingleTour);
router.get("/:id", getsingleTour);
// get all tour
router.get("/:id", getAllTour);
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

router.get("/search/getFeaturedTour", getFeaturedTour);

router.get("/search/getTourCount", getTourCount);


module.exports = router