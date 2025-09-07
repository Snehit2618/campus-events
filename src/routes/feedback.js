import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedback.js";

const router = express.Router();

// Submit feedback for an event by a student
router.post("/", submitFeedback);

// Get all feedback records (for testing)
router.get("/", getFeedback);

export default router;
