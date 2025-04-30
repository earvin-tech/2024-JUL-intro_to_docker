require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { connectDB } = require("./utils/database");
const { Post } = require("./models/PostModel");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// get all posts
app.get("/", async (request, response) => {
    const posts = await Post.find();
    response.json(posts);
});

// create a new post
app.post("/", async (request, response) => {
    const { title, content } = request.body;
    const post = await Post.create({
        title,
        content
    });
    response.status(201).json(post);
});

app.listen(PORT,
    async () => {
        await connectDB();
        console.log("Server is running on port: ", PORT);
});