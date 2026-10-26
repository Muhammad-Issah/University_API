import express from "express";
import cors from "cors";
import universityRoutes from "./routes/universityRoutes.js";
import connectDatabase from "./config/database.js";
import "dotenv/config";

// intialise express
const app = express();

// Set up the PORT
const PORT = process.env.PORT

// Enable CORS
app.use(cors());

// Parse incoming resquest with JSON
app.use(express.json());

// Connect to Database
connectDatabase();

// Home route
app.get("/", (req, res) => {
    res.send({ messsage: "WELCOME TO UNIVERSITIES API build by Muhammad" })
});

// Define routes
app.use("/api/universities", universityRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`server running on PORT: localhost:${PORT}`);
});
