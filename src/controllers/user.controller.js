// controllers/userController.js
import userService from "../services/user/user.service.js";

const userController = {
  async create(req, res) {
    const { email, password } = req.body;

    const newUser = await userService.createUser(email, password);
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  },
};

export default userController;
