import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/userModule/user.routes";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("server is running!");
});

export default app;
