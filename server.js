const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 120 * 1024 * 1024 }
});

app.use(express.static(__dirname));

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("Uploaded file:", req.file);
  console.log("Participant name:", req.body.name);
  res.send("تم رفع الفيديو بنجاح ✅");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
