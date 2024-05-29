import User from '../models/usermodel.js';
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from '../utils/helper/tokencokie.js';
const getUserProfile = async (req, res) => {
	// We will fetch user profile either with username or userId
	// query is either username or userId
	const { query } = req.params;

	try {
		let user;

		// query is userId
		if (mongoose.Types.ObjectId.isValid(query)) {
			user = await User.findOne({ _id: query }).select("-password").select("-updatedAt");
		} else {
			// query is username
			user = await User.findOne({ username: query }).select("-password").select("-updatedAt");
		}

		if (!user) return res.status(404).json({ error: "User not found" });

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log("Error in getUserProfile: ", err.message);
	}
};
const signupUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const user = await User.findOne({ $or: [{ email }, { username }] });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,
        });
        await newUser.save();

        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            bio: newUser.bio,
            profilePic: newUser.profilePic,
        });
    } catch (err) {
        console.error("Error in signupUser: ", err.message);
        res.status(500).json({ error: err.message });
    }
};
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Check if the account is frozen and unfreeze if necessary
        if (user.isFrozen) {
            user.isFrozen = false;
            await user.save();
        }

        // Generate authentication token and set cookie
        generateTokenAndSetCookie(user._id, res);

        // Respond with user data
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            bio: user.bio,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error('Error in loginUser:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const logoutUser = (req, res) => {
    try {
        // Clear JWT cookie to log out user
        res.clearCookie('jwt');
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.error('Error logging out user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const followUnFollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        // Check if the user is trying to follow/unfollow themselves
        if (id === req.user._id.toString()) {
            return res.status(400).json({ error: "You cannot follow/unfollow yourself" });
        }

        // Check if either userToModify or currentUser is not found
        if (!userToModify || !currentUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // Unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            res.status(200).json({ message: "User unfollowed successfully" });
        } else {
            // Follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            res.status(200).json({ message: "User followed successfully" });
        }
    } catch (error) {
        console.error('Error in followUnFollowUser:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
};
const updateUser= async(req,res) =>{
    const{name,email,username,password,profilePic,bio}=req.body;
    const userId=req.user._id;
    try{
        let user = await User.findById(userId);
        if(!user) return res.status(400).json({message:"User not found"});
        if (req.params.id !== userId.toString())
			return res.status(400).json({ error: "You cannot update other user's profile" });
        if(password){
            const salt=await bcrypt.genSalt(10);
            const hashedPassowrd =await bcrypt.hash(password,salt);
            user.password=hashedPassowrd
        }
        user.name = name || user.name;
		user.email = email || user.email;
		user.username = username || user.username;
		user.profilePic = profilePic || user.profilePic;
		user.bio = bio || user.bio;

        user=await user.save();
        res.status(200).json({message:"Profile Updated Sucessfully",user})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log("Error in updateUser:", error.message)

    }
}

export { signupUser ,loginUser,logoutUser,followUnFollowUser,updateUser,getUserProfile};
