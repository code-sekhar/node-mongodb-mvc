const User = require('../model/user');

const createUser = async (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({   
            success: false,
            message: 'Please provide both name and description'
        });
    }

    try {
        const newUser = new User({ name, description });
        const savedUser = await newUser.save();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: savedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the user',
            error: err.message
        });
    }
}

module.exports = {
    createUser
};