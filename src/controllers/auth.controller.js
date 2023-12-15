import bcrypt from "bcrypt";
import { generateToken, loginService } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email);

    if (!user) {
      return res.status(404).send({ message: "User or Password not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid || !user) {
      return res.status(400).send({ message: "User or Password not found" });
    }

    const token = generateToken(user.id)

    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { login };
