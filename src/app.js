
import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my backend application!");
});

// User routes
app.use("/api/v1/users", userRouter);

export default app;
