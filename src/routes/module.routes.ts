import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateModuleController } from "../modules/module/useCases/createModule/CreateModuleController";
import { DeleteModuleController } from "../modules/module/useCases/deleteModule/DeleteModuleController";
import { ListModulesController } from "../modules/module/useCases/listModules/ListModulesController";
import { UpdateModuleController } from "../modules/module/useCases/updateModule/UpdateModuleController";

const moduleRoutes = Router();

const createModuleController = new CreateModuleController();
const listModulesController = new ListModulesController();
const updateModuleController = new UpdateModuleController();
const deleteModuleController = new DeleteModuleController();

moduleRoutes.get("/", listModulesController.handle);

moduleRoutes.use(ensureAuthenticated);

moduleRoutes.post("/", createModuleController.handle);
moduleRoutes.put("/:id", updateModuleController.handle);
moduleRoutes.delete("/:id", deleteModuleController.handle);

export { moduleRoutes };
