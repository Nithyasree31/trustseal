const express = require("express");
const multer = require("multer");
const db = require("../db");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".mp4");
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("video"), (req, res) => {
  const { userId } = req.body;
  const videoPath = req.file.filename;

  db.query(
    "INSERT INTO consent_videos (user_id, video_path, status) VALUES (?, ?, ?)",
    [userId, videoPath, "PENDING"],
    () => {
      res.json({ message: "Video uploaded successfully" });
    }
  );
});

module.exports = router;

