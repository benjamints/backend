const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "sandbox",
});

module.exports = pool;
