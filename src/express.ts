import "reflect-metadata";
import express from "express";
import AppDataSource from "./typeorm/datasource";
import cors from "cors";
import { createUser } from "./controller/createUserHandler";
import { getUser } from "./controller/getUserHandler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.post("/user", createUser);
app.get("/user", getUser);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: Error) => console.log("Error: ", error));
