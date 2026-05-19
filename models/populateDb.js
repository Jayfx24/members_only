require("dotenv").config();
const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

async function runSql(loc) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  const sql = fs.readFileSync(path.join(__dirname, loc)).toString();

  await client.query(sql);
  await client.end();
}

runSql('../schema.sql')