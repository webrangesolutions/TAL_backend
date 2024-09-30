// routes/userRoutes.js
import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { errorHandler } from "../handlers/error.handlers.js";

const userRouter = Router();

userRouter.post("/create", errorHandler(userController.create));

export default userRouter;
