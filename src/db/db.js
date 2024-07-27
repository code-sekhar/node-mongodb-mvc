const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/nodejs-mongoose-crud';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('MongoDB connected...');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB