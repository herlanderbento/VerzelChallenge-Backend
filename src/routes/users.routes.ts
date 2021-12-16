import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUsersUseController } from "../modules/accounts/useCases/listUsers/listUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersUseController();
const deleteUserController = new DeleteUserController();

usersRoutes.get("/", listUsersController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };
