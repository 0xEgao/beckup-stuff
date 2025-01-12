
import express from 'express';
//writing a dummy server to understand relationships in postgress database
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
    try {
        //defining foreign key to have relationship between two tables
        const Query = `
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES userss(id) ON DELETE CASCADE
);
`;
        const response = await pgClient.query(Query);
        
        res.json({
            message:"database created successfully"
        });
    }
    catch (error :any) {
        res.json({
            message: error.message
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})