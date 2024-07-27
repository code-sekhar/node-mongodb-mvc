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
//getAllUsers
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving users',
            error: err.message
        });
    }
}
//deleteUser
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the user',
            error: err.message
        });
    }
}
//updateUser
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({
            success: false,
            message: 'Please provide both name and description'
        });
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, description }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating the user',   
            error: err.message
        });
    }
}
module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
};