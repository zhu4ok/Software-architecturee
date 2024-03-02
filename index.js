require('dotenv').config();
const express = require("express");
const app = express();

// Route for the home page
app.get("/", (req, res) => {
    res.send(process.env.HELLO || "Hello, world!");
});

// Route for the user page
app.get("/user", (req, res) => {
    res.json({
        name: process.env.NAME || "Viktoriia",
        age: process.env.AGE || "21"
    });
});

// Define the port to run the server on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
