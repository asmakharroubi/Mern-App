const {
  deleteUser,
  getAllUser,
  getsingleUser,
  updateUser,
} = require("../controllers/userController.js"); ;

const express = require("express");
const router = require("express").Router();

const verifyUser = require('../utils/verifyToken.js')


// update User
router.put("/:id",updateUser);
// delete User
router.delete("/:id", deleteUser);
// get single User
router.post("/:id",getsingleUser);
// get all User
router.get("/:id", getAllUser);


module.exports= router
