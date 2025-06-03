import express from "express";
import dotenv from "dotenv";
import Routes from "./routes";
import dbConnexion from "#database/dbConnexion"
import chalk from "chalk";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes)

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(chalk.blue("Server running at PORT: ", (PORT))); 
  dbConnexion();
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(chalk.red(error.message));
});

export default app;