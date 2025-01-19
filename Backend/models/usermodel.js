import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
<<<<<<< HEAD
			minLength: 4,
=======
			minLength: 6,
>>>>>>> origin/main
			required: true,
		},
		profilePic: {
			type: String,
			default: "",
		},
		followers: {
<<<<<<< HEAD
            // array of strings
=======
>>>>>>> origin/main
			type: [String],
			default: [],
		},
		following: {
			type: [String],
			default: [],
		},
		bio: {
			type: String,
<<<<<<< HEAD
			default: "Hey! There 👋",
=======
			default: "",
>>>>>>> origin/main
		},
		isFrozen: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> origin/main
