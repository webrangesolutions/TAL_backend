import express from "express";
import {
  assignHTTPError,
  errorResponder,
  invalidPathHandler,
} from "../middlewares/error.middlewares.js";
import mailRouter from "./mail.routes.js";
import userRouter from "./user.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the TAL API");
});

router.use("/mail", mailRouter);
router.use("/user", userRouter);

router.use(assignHTTPError);
router.use(errorResponder);
router.use(invalidPathHandler);

export default router;
