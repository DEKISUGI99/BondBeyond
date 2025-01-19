import express from "express";
import {
<<<<<<< HEAD
  getUserProfile,
  signupUser,
  loginUser,
  logoutUser,
  followUnFollowUser, 
  updateUser
=======
	followUnFollowUser,
	getUserProfile,
	loginUser,
	logoutUser,
	signupUser,
	updateUser,
	getSuggestedUsers,
	freezeAccount,
>>>>>>> origin/main
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router=express.Router();

<<<<<<< HEAD
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
=======
router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);
>>>>>>> origin/main


export default router;