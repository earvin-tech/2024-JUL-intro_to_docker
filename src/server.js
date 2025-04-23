const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Hello from Docker!!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});