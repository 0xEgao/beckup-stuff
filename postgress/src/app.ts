import { Client } from 'pg';
import { config } from 'dotenv';
config();
const PASSWORD = process.env.PASSWORD;
const HOST=process.env.HOST;
const pgClient = new Client({
    user: "neondb_owner",
    password: PASSWORD,
    port: 5432,
    host: HOST,
    database: "neondb",
    ssl:true,
})
async function ConnectDB() {
    await pgClient.connect();
    // Will write our queries here
    const response = await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
}
ConnectDB();