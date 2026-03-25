import pool from "../db/db.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  // we expect to receive full_name, username, password, role
  try {
    const { full_name, username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (full_name, username, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [full_name, username, hashedPassword, role]
    );
    res.status(201).json({
      message: "muoffaqiyatli ro'yhatdan o'tdi",
      users: result.rows[0],
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
