import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// To avoid warnings in the console
<<<<<<< HEAD
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
=======
			useNewUrlParser: true,
			useUnifiedTopology: true,
>>>>>>> origin/main
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

<<<<<<< HEAD
export default connectDB;
=======
export default connectDB;
>>>>>>> origin/main
