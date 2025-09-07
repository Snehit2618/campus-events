import pool from "../config/db.js";

export const createEvent = async (req, res) => {
  try {
    const { name, type, date, college_id } = req.body;
    const result = await pool.query(
      "INSERT INTO events (name, type, date, college_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, type, date, college_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create event" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};
