import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListModulesJoinLessonUseCases } from "./ListModulesJoinLessonUseCases";

class ListModulesJoinLessonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listModulesJoinLessonUseCases = container.resolve(
      ListModulesJoinLessonUseCases
    );

    const list = await listModulesJoinLessonUseCases.execute();

    return response.json(list);
  }
}

export { ListModulesJoinLessonController };
