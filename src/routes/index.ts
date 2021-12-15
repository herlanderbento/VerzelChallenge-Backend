import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { lessonRoutes } from "./lesson.routes";
import { moduleRoutes } from "./module.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

const prefixRouter = "/api/v1";

router.use(`${prefixRouter}/modules`, moduleRoutes);
router.use(`${prefixRouter}/lessons`, lessonRoutes);
router.use(`${prefixRouter}/users`, usersRoutes);
router.use(`${prefixRouter}/sessions`, authenticateRoutes);

export { router };
