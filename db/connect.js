const mongoose = require ('mongoose');

uri="mongodb+srv://reachbingo002:t7FAhf2DeDvl3VXu@fudo.uri0n.mongodb.net/?retryWrites=true&w=majority&appName=fudo";


const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;
