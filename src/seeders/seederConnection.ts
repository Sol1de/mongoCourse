import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const seederConnection = async () => {
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
  const dbName = process.env.MONGO_DB_NAME || 'bookstore';

  await mongoose.connect(mongoUrl, {
    dbName: dbName
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.log('Error connecting to MongoDB: ', error);
    process.exit(1);
  });
}

export default seederConnection;