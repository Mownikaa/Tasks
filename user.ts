import e, { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../Controllers/Use";

// controllers
const userRouter = Router();

// get all users. the full endpoint of this becomes /users
userRouter.get("/", getAllUsers);

userRouter.post("/", createUser);

// get user by id. the full endpoint of this becomes /users/:id
userRouter.get("/:id", getUserById);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);


export default userRouter;