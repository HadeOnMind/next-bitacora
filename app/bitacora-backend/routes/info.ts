import express from "express";
import { sktbk } from "../models/sktbkmodel";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const count = await sktbk.countDocuments();

    res.json({
      totalBooks: count,      
    });
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Unknown error occurred" });
    }
  }

});

export default router;