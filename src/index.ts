import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Routes from "./routes";
import dbConnexion from "#database/dbConnexion"

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(Routes)

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT); 
  dbConnexion();
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});