import { log } from "console";
import express from "express";

const app = express();

app.listen(3000, () => {
  log("Server is running on port 3000");
});
