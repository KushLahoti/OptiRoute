import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import deliveryRouter from "./routes/Delivery.route.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api/deliveries", deliveryRouter);

//Test Route
app.get("/", (req, res) => {
    res.send("OptiRoute Backend Running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})