import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = "645324853478";
const EXPIRATION_MINUTES = "30m";

export const authToken = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await userModel.findOne({
      where: { userName, password },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid userName or password" })
        .end();
    }

    const payload = {
      userName: user.userName,
      password: user.password,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: EXPIRATION_MINUTES,
    });

    res
      .json({
        access_token: accessToken,
        token_type: "Bearer",
        expires_in: EXPIRATION_MINUTES,
      })
      .end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
