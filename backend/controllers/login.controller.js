//definimos las funciones que se ejecutan en cada ruta para /login
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const handleUserLogin = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password)
        return res.status(400).json({ message: "Please provide all fields." });

    try {
        const user = await User.findOne({email: email})
        if (!user || user.password !== password) {
            return res.status(404).json({ message: "Invalid email or password." });
          }

        const token = jwt.sign({sub: user._id, email: user.email}, process.env.SECRET_KEY, {expiresIn: '1h'});

        return res.status(200).json({ message: "Success.", token: token});
    } catch (error) {
        console.error("Error during login: ", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export default handleUserLogin;
