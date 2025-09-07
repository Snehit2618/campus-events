import pool from "../config/db.js";

// Event Popularity Report (Registrations per event sorted desc)
export const eventPopularityReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.id, e.name, e.type, e.date, COUNT(r.id) AS total_registrations
      FROM events e
      LEFT JOIN registrations r ON e.id = r.event_id
      GROUP BY e.id
      ORDER BY total_registrations DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate event popularity report" });
  }
};

// Student Participation Report (Events attended per student)
export const studentParticipationReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id AS student_id, s.name AS student_name, COUNT(a.id) AS events_attended
      FROM students s
      LEFT JOIN attendance a ON s.id = a.student_id AND a.status = true
      GROUP BY s.id
      ORDER BY events_attended DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate student participation report" });
  }
};

// Top 3 Most Active Students (by events attended)
export const topActiveStudentsReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id AS student_id, s.name AS student_name, COUNT(a.id) AS events_attended
      FROM students s
      LEFT JOIN attendance a ON s.id = a.student_id AND a.status = true
      GROUP BY s.id
      ORDER BY events_attended DESC
      LIMIT 3
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate top active students report" });
  }
};

// Flexible report: Events filtered by event type (query param: ?type=Workshop)
export const eventsByTypeReport = async (req, res) => {
  try {
    const { type } = req.query;
    if (!type) {
      return res.status(400).json({ error: "Event type query parameter is required" });
    }
    const result = await pool.query(`
      SELECT e.id, e.name, e.type, e.date, COUNT(r.id) AS total_registrations
      FROM events e
      LEFT JOIN registrations r ON e.id = r.event_id
      WHERE e.type = $1
      GROUP BY e.id
      ORDER BY total_registrations DESC
    `, [type]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate events by type report" });
  }
};
