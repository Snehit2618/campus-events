import express from "express";
import { 
  eventPopularityReport, 
  studentParticipationReport, 
  topActiveStudentsReport, 
  eventsByTypeReport 
} from "../controllers/reports.js";

const router = express.Router();

// GET registrations count per event, sorted (popularity)
router.get("/popularity", eventPopularityReport);

// GET number of events attended per student
router.get("/participation", studentParticipationReport);

// GET top 3 most active students by attendance
router.get("/top-students", topActiveStudentsReport);

// GET events filtered by type (e.g., Workshop, Fest, Seminar)
router.get("/by-type", eventsByTypeReport);

export default router;
