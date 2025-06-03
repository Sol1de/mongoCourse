import mongoose from 'mongoose';

const dbConnexion = async () => {
  await mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.log('Error connecting to MongoDB: ', error);
  })
}

export default dbConnexion;
