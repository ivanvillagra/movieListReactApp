import { Pool } from "pg"
const pool = new Pool({
host: "0.0.0.0",
port: 5432,
user:"postgres",
password:"postgres",
database:"postgres"
});

export default pool;


/*

  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT * from public.users
    `);    console.log(result.rows);
  } finally {
    client.release();
  } conexion bdd

*/