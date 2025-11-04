import express from "express";
import { getSketchbooks, createSketchbook, updateSketchbook, deleteSketchbook } from "../controllers/sktbkcontroller"

const router = express.Router();

router.get("/", getSketchbooks);
router.post("/", createSketchbook);
router.put("/:id", updateSketchbook)
router.delete("/:id", deleteSketchbook)

export default router;