import chalk from 'chalk';
import mongoose from 'mongoose';

const dbConnexion = async () => {
  await mongoose.connect(process.env.MONGO_URL as string, {
    dbName: process.env.MONGO_DB_NAME
  }).then(() => {
    console.log(chalk.green('Connected to MongoDB'));
  }).catch((error) => {
    console.log(chalk.red('Error connecting to MongoDB: '), error);
  })
}

export default dbConnexion;
