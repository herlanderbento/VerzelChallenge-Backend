import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateLessonController } from "../modules/lessons/useCases/createLesson/CreateLessonController";
import { DeleteLessonController } from "../modules/lessons/useCases/deleteLesson/DeleteLessonController";
import { ListLessonOfModuleController } from "../modules/lessons/useCases/ListLessonOfModules/ListLessonOfModuleController";
import { ListLessonsController } from "../modules/lessons/useCases/ListLessons/ListLessonController";
import { UpdateLessonController } from "../modules/lessons/useCases/updateLesson/UpdateLessonController";

const lessonRoutes = Router();

const createLessonController = new CreateLessonController();
const listLessonsController = new ListLessonsController();
const listLessonOfModuleController = new ListLessonOfModuleController();
const updateLessonController = new UpdateLessonController();
const deleteLessonController = new DeleteLessonController();

lessonRoutes.get("/", listLessonsController.handle);
lessonRoutes.get("/:module_id", listLessonOfModuleController.handle);

lessonRoutes.use(ensureAuthenticated);
lessonRoutes.post("/", createLessonController.handle);
lessonRoutes.put("/:id", updateLessonController.handle);
lessonRoutes.delete("/:id", deleteLessonController.handle);

export { lessonRoutes };
