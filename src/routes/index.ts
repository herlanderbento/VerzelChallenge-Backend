import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { lessonRoutes } from "./lesson.routes";
import { moduleRoutes } from "./module.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/module", moduleRoutes);
router.use("/lesson", lessonRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
