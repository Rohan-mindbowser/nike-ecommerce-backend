import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "./config/dbConnection";
import { routes } from "./modules/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Routes */
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

connect()
  .then((res) => {
    console.log("DB connected...");
  })
  .catch((err) => {
    console.log("DB connection failed...");
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
