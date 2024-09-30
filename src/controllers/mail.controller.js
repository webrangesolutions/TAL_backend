import mailService from "../services/mail/mail.service.js";

const mailController = {
  async sendAccountApprovalMail(req, res, next) {
    const { to, subject, userData } = req.body;
    let result = mailService.sendAccountApprovalMail({
      to,
      subject,
      userData,
    });

    return res
      .status(200)
      .json({ message: "Account approval email sent", result });
  },

  async sendAccountDeclineMail(req, res, next) {
    const { to, subject, userData } = req.body;
    let result = mailService.sendAccountDeclineMail({
      to,
      subject,
      userData,
    });

    return res
      .status(200)
      .json({ message: "Account decline email sent", result });
  },

  async sendEmployerAccountCreationMail(req, res, next) {
    const { to, subject, userData } = req.body;
    let result = mailService.sendEmployerAccountCreationMail({
      to,
      subject,
      userData,
    });

    return res
      .status(200)
      .json({ message: "Employer account creation email sent", result });
  },

  async sendUserCreationMail(req, res, next) {
    const { to, subject, userData } = req.body;
    let result = mailService.sendUserCreationMail({
      to,
      subject,
      userData,
    });

    return res
      .status(200)
      .json({ message: "User account creation email sent", result });
  },
};

export default mailController;
