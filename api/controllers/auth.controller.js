import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = User({
        username,
        email,
        password: hashedPassword,
    })
    try {
        await newUser.save();
        res.json("Singup successful");


    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};