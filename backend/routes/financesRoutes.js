import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

app.get("/api/trips", (req, res) => {
  res.json("ok");
});

export default router;
