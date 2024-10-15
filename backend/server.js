import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import registerRoutes from './routes/register.route.js'
import loginRoutes from './routes/login.route.js'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);


app.post('/register', (req, res) => {
    const user = req.body;
    
})
app.listen(PORT, () => {
    connectDB();
    console.log("Server running at port " + PORT);
})