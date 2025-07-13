// Import mongoose – a popular library to work with MongoDB in Node.js
import mongoose from "mongoose";

// Import the DB_NAME constant – it contains the name of the database
import { DB_NAME } from "../constants.js";

// Define an async function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Try to connect to MongoDB using the connection string from environment variables
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // If the connection is successful, print a success message with the database host
    console.log(
      `\n ✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // If there's an error while connecting, print an error message
    console.log("❌ MongoDB connection error:", error);

    // Exit the process with failure code (1) so that the app doesn't continue running
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files
export default connectDB;
