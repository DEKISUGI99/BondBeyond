import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

export default connectdb;
