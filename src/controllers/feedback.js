import pool from "../config/db.js";

// Submit or update feedback rating for an event by a student
export const submitFeedback = async (req, res) => {
  try {
    const { student_id, event_id, rating } = req.body;

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    // Check if student attended the event (only attendees can submit feedback)
    const attendanceCheck = await pool.query(
      "SELECT * FROM attendance WHERE student_id = $1 AND event_id = $2 AND status = true",
      [student_id, event_id]
    );

    if (attendanceCheck.rows.length === 0) {
      return res.status(400).json({ error: "Student did not attend the event or attendance not marked" });
    }

    // Insert or update feedback
    const result = await pool.query(
      `INSERT INTO feedback (student_id, event_id, rating)
       VALUES ($1, $2, $3)
       ON CONFLICT (student_id, event_id) 
       DO UPDATE SET rating = EXCLUDED.rating
       RETURNING *`,
      [student_id, event_id, rating]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
};

// Fetch all feedback records (for testing)
export const getFeedback = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM feedback");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
};
