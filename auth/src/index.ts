import express from "express";
import pkg from "body-parser";
import { currentUserRouter } from "./routes/current-user.js";
import { SigninRouter } from "./routes/sigin.js";
import { SignoutRouter } from "./routes/signout.js";
import { SignupRouter } from "./routes/signup.js";
import { errorHandler } from "./middlewares/error-handler.js"

const { json } = pkg;

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(SigninRouter);
app.use(SignoutRouter);
app.use(SignupRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server started running on port 3000");
});
