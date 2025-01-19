import express from "express";
import {
  getUserProfile,
  signupUser,
  loginUser,
  logoutUser,
  followUnFollowUser, 
  updateUser
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router=express.Router();

// Get User
router.get("/profile/:query", getUserProfile);
// Signup
router.post("/signup",signupUser);
// Login
router.post("/login",loginUser);
// Logout
router.post("/logout",logoutUser);
// Follow
router.post("/follow/:id", protectRoute, followUnFollowUser);
// Update
router.put("/update/:id", protectRoute, updateUser);


export default router;