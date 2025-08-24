import pool from "../../lib/db";

export default async function Home() {

  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT * from public.users
    `);    console.log(result.rows);
  } finally {
    client.release();
  }
  
  return (
    <div className="container flex justify-center items-center h-full w-full">
      <div className=" w-96 h-96 formDiv">
        <form className=" col-1">
          <label htmlFor="userName">Usuario:</label>
          <input id="userName" type="text" className="bg-amber-50"/>
        </form> 
      </div>
    

    </div>
  );
}
