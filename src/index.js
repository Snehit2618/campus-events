import express from "express";
import dotenv from "dotenv";
import eventRoutes from "./routes/events.js";
import registrationRoutes from "./routes/registrations.js";
import attendanceRoutes from "./routes/attendance.js";
import feedbackRoutes from "./routes/feedback.js";
import reportRoutes from "./routes/reports.js";


dotenv.config();
const app = express();
app.use(express.json());


app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/reports", reportRoutes);


// Root test route
app.get("/", (req, res) => {
  res.send("✅ API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
