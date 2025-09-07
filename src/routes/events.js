import express from "express";
import { createEvent, getEvents } from "../controllers/events.js";

const router = express.Router();

router.post("/", createEvent);   // POST http://localhost:5000/api/events
router.get("/", getEvents);      // GET  http://localhost:5000/api/events

console.log("📌 Events routes loaded");

export default router;
