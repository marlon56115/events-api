import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const client = new pg.Client({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: "postgres", // Conectarse a la base default
});

async function createDatabase() {
  try {
    await client.connect();
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'`);
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE ${DB_NAME}`);
      console.log(`✅ Base de datos '${DB_NAME}' creada correctamente`);
    } else {
      console.log(`ℹ️ La base de datos '${DB_NAME}' ya existe`);
    }
  } catch (err) {
    console.error("❌ Error creando la base de datos:", err.message);
  } finally {
    await client.end();
  }
}

createDatabase();
