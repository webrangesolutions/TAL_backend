import { createTransporter } from "../../utils/mailer.js";
import accountApprovalTemplate from "./templates/accountApproval.js";
import accountDeclineTemplate from "./templates/accountDecline.js";
import employerCreation from "./templates/employerCreation.js";
import userCreation from "./templates/userCreation.js";

const mailService = {
  sendEmail(email, subject, body) {
    let mail = createTransporter();
    let mailOptions = {
      from: "TAL",
      to: email,
      subject: subject,
      html: body,
    };

    return mail.sendMail(mailOptions);
  },

  async sendAccountApprovalMail({ to, subject, userData }) {
    const html = accountApprovalTemplate(userData);
    return this.sendEmail(to, subject, html);
  },

  async sendAccountDeclineMail({ to, subject, userData }) {
    const html = accountDeclineTemplate(userData);
    return this.sendEmail(to, subject, html);
  },

  async sendEmployerAccountCreationMail({ to, subject, userData }) {
    const html = employerCreation(userData);
    return this.sendEmail(to, subject, html);
  },

  async sendUserCreationMail({ to, subject, userData }) {
    const html = userCreation(userData);
    return this.sendEmail(to, subject, html);
  },
};

export default mailService;
