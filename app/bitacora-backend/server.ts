import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import sktbkroutes from "./routes/sktbkroutes";
import sktbroutesStats from "./routes/info"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Bitacora Running" });
});

app.use("/api/sketchbooks", sktbkroutes);
app.use("/api/stats", sktbroutesStats);


app.listen(PORT, () => {
  console.log(`Server running here => http://localhost:${PORT}`);
});
