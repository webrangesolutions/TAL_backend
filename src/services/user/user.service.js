// services/userService.js
import admin from "../../configs/firebase.config.js";

const userService = {
  async createUser(email, password) {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    return userRecord;
  },
};

export default userService;
