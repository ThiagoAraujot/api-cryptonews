import mongoose from "mongoose";
import userService from "../services/user.service.js";
import userRepositories from "../repositories/user.repositories.js";

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "User not found" });
    }

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userRepositories.findByIdRepository(id);

    if (!user) {
      return res.status(404).send({ message: "Error creating User" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default { validId, validUser };
