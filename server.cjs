const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001; // Use environment port or default to 3001

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Or render a template, serve an HTML file, etc.
});

// Proxy endpoint to forward POST request to the API server
app.post("/api/counter", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.api-ninjas.com/v1/counter",
      req.body,
      {
        headers: {
          "X-Api-Key": "zek8Skw2XShmwr3nYrr1RBtT253JC5OKfZgKXgm2", // Replace with your actual API key
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response.data);
    res
      .status(error.response.status)
      .json({ error: "Failed to proxy request" });
  }
});

// Serve static files (e.g., React app) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Catch-all route handler to serve the React app's HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
