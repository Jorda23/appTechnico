import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import { permissionModel } from "../models/permission.model.js";

const JWT_SECRET_KEY = "645324853478";

export const verifyToken = async (token) => {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    const user = await userModel.findOne({
      where: { userName: decodedToken.userName },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const permission = await permissionModel.findOne({
      where: { permissionName: "secretary" },
    });

    if (!permission) {
      throw new Error("Permission not found");
    }

    if (user.idPermission !== permission.idPermission) {
      throw new Error("User does not have permission for private area");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
