import express from "express";
import Content from "../models/Content.js";

const router = express.Router();

// GET content
router.get("/", async (req, res) => {
  try {
    const content = await Content.findOne();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE content
router.put("/", async (req, res) => {
  try {
    const updated = await Content.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
