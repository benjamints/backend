const pool = require("../helpers/connectPosgres.helpper");

module.exports = {
  get: async (id) => {
    try {
      const result = await pool.query(
        `SELECT id, name, age FROM users WHERE id=$1`,
        [id]
      );

      if (result.rows.length > 0) return result.rows[0];

      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  create: async (id, name, age) => {
    try {
      const result = await pool.query(
        `INSERT INTO users (id, name, age) VALUES ($1,$2,$3)RETURNING *`,
        [id, name, age]
      );

      if (result.rows.length > 0) return result.rows[0];

      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  update: async (id, name, age) => {
    try {
      const result = await pool.query(
        `UPDATE users SET name=$2,age=$3 WHERE id=$1`,
        [id, name, age]
      );

      if (result.rows.length > 0) return result.rows[0];

      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
  delete: async (id) => {
    try {
      const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);

      if (result.rows.length > 0) return result.rows[0];

      return null;
    } catch (err) {
      throw new Error(err);
    }
  },
};
