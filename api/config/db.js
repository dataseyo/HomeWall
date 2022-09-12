import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

// connect to database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        })

        console.log('connection successful')
    } catch(err) {
        console.error(err.message);

        // exit process with failure
        process.exit(1); 
    }
}

export default connectDB;
