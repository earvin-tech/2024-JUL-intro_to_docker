const mongoose = require("mongoose");

async function connectDB() {
    // define the database url
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
    try {
        // connect to the database
        await mongoose.connect(databaseUrl);
        // acknowledgement message
        console.log("Connected to Database!");
    } catch (error) {
        // if ERROR, acknowledgement message
        console.error("Error connecting to Mongo DB: ", error);
        process.exit(1);
    }

}

module.exports = { connectDB }