const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Upload successful");
});

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
