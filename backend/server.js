const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const videoRoutes = require("./routes/video");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
