import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLessonOfModuleUseCase } from "./ListLessonOfModuleUseCase";

class ListLessonOfModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { module_id } = request.params;

    const listLessonOfModuleUseCase = container.resolve(
      ListLessonOfModuleUseCase
    );

    const list = await listLessonOfModuleUseCase.execute(module_id);

    const all = Object.assign([...list, { total: list.length }]);

    return response.status(200).json(all);
  }
}

export { ListLessonOfModuleController };
