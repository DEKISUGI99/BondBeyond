import express from 'express';
import {signupUser,loginUser,logoutUser,followUnFollowUser, updateUser,getUserProfile} from '../controllers/usecontroller.js'
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();


// Body parsing middleware
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));
router.get("/profile/:query",getUserProfile)
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.post("/update/:id", protectRoute, updateUser);

export default router;
