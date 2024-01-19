import User from "../models/User.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createRepository = (body) => User.create(body);

const findAllRepository = () => User.find();

const findByIdRepository = (id) => User.findById(id);

const updateRepository = ({
  id,
  name,
  username,
  email,
  password,
  avatar,
  background,
}) =>
  User.findOneAndUpdate(
    { _id: id },
    {
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
    { rawResult: true }
  );

export default {
  findByEmailUserRepository,
  createRepository,
  findAllRepository,
  findByIdRepository,
  updateRepository,
};
