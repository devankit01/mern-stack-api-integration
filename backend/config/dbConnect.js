const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        const connected = await mongoose.connect(process.env.MONGODB_URL, {
            // useFindAndModify: false,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected`)

    } catch(err){
        console.log('Error : ', err.message)
    }
}

module.exports = {dbConnect}