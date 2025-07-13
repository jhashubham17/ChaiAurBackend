// Import dotenv – this loads environment variables from the .env file into process.env
import dotenv from "dotenv";

// Import the function that connects to MongoDB
import connectDB from "./db/index.js";

// Load environment variables from .env file (like PORT, MONGODB_URI)
dotenv.config({
  path: "./.env", // You can change the path if your .env file is located elsewhere
});

// Call the connectDB function to connect to the MongoDB database
connectDB()
  .then(() => {
    // If MongoDB is connected successfully, start the server

    // 'application' should be your Express app (make sure it's defined before this code)
    application.listen(process.env.PORT || 3000, () => {
      console.log(`✅ Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    // If there is any error while connecting to the database, log the error
    console.log("❌ MongoDB connection failed!!", err);
  });
