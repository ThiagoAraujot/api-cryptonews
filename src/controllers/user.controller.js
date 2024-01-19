import userService from "../services/user.service.js";

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  try {
    const token = await userService.createUserService({
      name,
      username,
      email,
      password,
      avatar,
      background,
    });

    return res.status(201).send(token);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllUserService();

    return res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const findById = async (req, res) => {
  const { id: userId } = req.params;
  const UserIdLogged = req.userId;
  try {
    const user = await userService.findUserByIdService(userId, UserIdLogged);

    return res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const update = async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  try {
    const response = await userService.updateUserService(body, userId);

    return res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export default { create, findAll, findById, update };
