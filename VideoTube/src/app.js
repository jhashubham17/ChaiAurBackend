// Import necessary packages
import express from "express"; // Express is the main web framework
import cors from "cors"; // CORS allows your backend to talk to other domains (like frontend)
import cookieParser from "cookie-parser"; // Helps read and set cookies in requests

// Create an Express application
const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
// This allows the frontend (on a different domain or port) to access your backend
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allowed frontend URL (stored in .env)
    credentials: true, // Allow cookies and credentials to be sent
  })
);

// Parse incoming JSON requests
app.use(express.json({ limit: "16kb" })); // Limit body size to prevent overload attacks

// Parse URL-encoded data (form submissions, etc.)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files like images, CSS, JS from the "public" folder
app.use(express.static("public"));

// Parse cookies from incoming requests
app.use(cookieParser());

// Export the configured Express app
export { app };
