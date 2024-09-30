import express from "express";
import { errorHandler } from "../handlers/error.handlers.js";
import mailController from "../controllers/mail.controller.js";

const mailRouter = express.Router();

mailRouter.post(
  "/sendAccountApproval",
  errorHandler(mailController.sendAccountApprovalMail)
);
mailRouter.post(
  "/sendAccountDecline",
  errorHandler(mailController.sendAccountDeclineMail)
);
mailRouter.post(
  "/sendEmployerAccountCreation",
  errorHandler(mailController.sendEmployerAccountCreationMail)
);
mailRouter.post(
  "/sendUserAccountCreation",
  errorHandler(mailController.sendUserCreationMail)
);

export default mailRouter;
