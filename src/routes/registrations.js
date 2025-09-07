import express from "express";
import { registerStudent, getRegistrations } from "../controllers/registrations.js";

const router = express.Router();

// Register a student to an event
router.post("/", registerStudent);

// Get all registrations (optional, for testing)
router.get("/", getRegistrations);

export default router;
