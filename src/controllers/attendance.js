import pool from "../config/db.js";

// Mark student attendance
export const markAttendance = async (req, res) => {
  try {
    const { student_id, event_id, status } = req.body;

    // Only allow attendance for registered students
    const check = await pool.query(
      "SELECT * FROM registrations WHERE student_id = $1 AND event_id = $2",
      [student_id, event_id]
    );

    if (check.rows.length === 0) {
      return res.status(400).json({ error: "Student is not registered for this event" });
    }

    // Insert or update attendance
    const result = await pool.query(
      `INSERT INTO attendance (student_id, event_id, status) 
       VALUES ($1, $2, $3)
       ON CONFLICT (student_id, event_id) 
       DO UPDATE SET status = EXCLUDED.status
       RETURNING *`,
      [student_id, event_id, status]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to mark attendance" });
  }
};

// Get all attendance records (testing only)
export const getAttendance = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM attendance");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch attendance" });
  }
};
