import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendance.js";

const router = express.Router();

// Mark attendance
router.post("/", markAttendance);

// Get attendance records (for testing)
router.get("/", getAttendance);

export default router;
