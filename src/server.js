require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./utils/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Hello from Docker!!");
})

app.listen(PORT,
    async () => {
        await connectDB();
        console.log("Server is running on port: ", PORT);
});