//definimos las funciones que se ejecutan en cada ruta para /register
import User from "../models/user.model.js";

const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password)
        return res.status(400).json({message: 'Please provide all fields.'});
    try {
        const existingUser = await User.findOne({email:email});
        if (existingUser)
            return res.status(400).json({message: 'Email already in use.'})

        const newUser = await User.create({name, email, password})
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error during register: ', error);
        res.status(500).json({ message: 'Internal server error.', error });
    }
};

export default createUser;