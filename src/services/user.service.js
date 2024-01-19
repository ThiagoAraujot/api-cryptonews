import userRepositories from "../repositories/user.repositories.js";
import authService from "../services/auth.service.js";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  username,
  email,
  password,
  avatar,
  background,
}) => {
  if (!name || !username || !email || !password || !avatar || !background)
    throw new Error("Submit all fields for registration");

  const foundUser = await userRepositories.findByEmailUserRepository(email);

  if (foundUser) throw new Error("User already exists");

  const user = await userRepositories.createRepository({
    name,
    username,
    email,
    password,
    avatar,
    background,
  });

  if (!user) throw new Error("Error creating User");

  const token = authService.generateToken(user.id);

  return token;
};

const findAllUserService = async () => {
  const users = await userRepositories.findAllRepository();

  if (users.length === 0) throw new Error("There are no registered users");

  return users;
};

const findUserByIdService = async (userId, UserIdLogged) => {
  let idParam;

  if (!userId) {
    userId = UserIdLogged;
    idParam = userId;
  } else {
    idParam = userId;
  }
  if (!idParam)
    throw new Error("Send an id in the parameters to search for the user");

  const user = await userRepositories.findByIdRepository(idParam);

  return user;
};

const updateUserService = async (body, userId) => {
  const { name, username, email, password, avatar, background } = body;

  if (!name && !username && !email && !password && !avatar && !background)
    throw new Error("Submit at least one field for update");

  const user = await userRepositories.findByIdRepository(id);

  if (user._id != userId) throw new Error("You cannot update this user");

  if (password) password = await bcrypt.hash(password, 10);

  await userRepositories.updateRepository(userId, body);

  return { message: "User sucessfully updated!" };
};

export default {
  createUserService,
  findAllUserService,
  findUserByIdService,
  updateUserService,
};
