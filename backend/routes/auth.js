const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

/* Register */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed],
    (err) => {
      if (err) return res.status(500).json({ message: "Error" });
      res.json({ message: "User Registered" });
    }
  );
});

/* Login */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length === 0)
        return res.status(400).json({ message: "User not found" });

      const valid = await bcrypt.compare(password, result[0].password);
      if (!valid)
        return res.status(400).json({ message: "Wrong password" });

      res.json({ message: "Login successful", userId: result[0].id });
    }
  );
});

module.exports = router;
