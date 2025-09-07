import pool from "../config/db.js";

// Register student for an event
export const registerStudent = async (req, res) => {
  try {
    const { student_id, event_id } = req.body;

    const result = await pool.query(
      "INSERT INTO registrations (student_id, event_id) VALUES ($1, $2) RETURNING *",
      [student_id, event_id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    if (err.code === "23505") {
      // unique_violation (duplicate registration)
      return res.status(400).json({ error: "Student already registered for this event" });
    }
    res.status(500).json({ error: "Failed to register student" });
  }
};

// Get all registrations (for testing)
export const getRegistrations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM registrations");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
};
