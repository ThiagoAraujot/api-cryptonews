import express from "express";
import connectcDataBase from "./src/database/db.js";
import "dotenv/config";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

connectcDataBase();
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(router);

export default app;
