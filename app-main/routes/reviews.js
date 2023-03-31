const  createReview  = require("../controllers/reviewController.js");
const { verifyUser } =require("../utils/verifyToken.js");


const express = require("express");
const router = require("express").Router();

router.post('/:tourId',createReview)

module.exports=router