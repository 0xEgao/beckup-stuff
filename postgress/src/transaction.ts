
import express from 'express';
//writing a dummy server to understand transactiions in postgress database
//transactions are used to maintain the integrity of the database
//if any query fails in the transaction, the entire transaction is rolled back
import { Client } from 'pg';
import { config } from 'dotenv';
config();
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const app = express();
app.use(express.json());

const pgClient = new Client(CONNECTION_STRING);
pgClient.connect();

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        await pgClient.connect();

        // Start transaction
        await pgClient.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await pgClient.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await pgClient.query(insertAddressText, [userId, city, country, street, pincode]);

        // Commit transaction
        await pgClient.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await pgClient.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await pgClient.end(); // Close the pgClient connection
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})