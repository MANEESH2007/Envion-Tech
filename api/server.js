const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Home/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/About/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Contact/index.html"));
});

app.get("/technology", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Technology/index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Service/index.html"));
});

// Local dev server
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// ✅ Export for Vercel
module.exports = app;
