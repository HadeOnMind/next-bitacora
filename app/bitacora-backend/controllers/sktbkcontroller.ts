import { sktbk } from "../models/sktbkmodel";
import { Request, Response } from "express";




export const getSketchbooks = async (req: Request, res: Response) => {
  const sketchbooks = await sktbk.find();
  res.json(sketchbooks);
};


export const createSketchbook = async (req: Request, res: Response) => {
  const sketchbook = new sktbk(req.body);
  await sketchbook.save();
  res.status(201).json(sketchbook);
};



export const updateSketchbook = async (req: Request, res: Response) => {

  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedBook = await sktbk.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBook) return res.status(404).json({ message: "Sketchbook not found" });

    res.json(updatedBook);
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Unknown error occurred" });
    }
  }

};


export const deleteSketchbook = async (req: Request, res: Response) => {
  
  try {
    const { id } = req.params;
    const deleted = await sktbk.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: "Sketchbook not found" });

    res.json({ message: "Sketchbook deleted successfully" });

  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Unknown error occurred" });
    }
  }

};