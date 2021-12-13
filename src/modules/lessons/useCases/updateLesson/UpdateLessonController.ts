import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLessonUseCase } from "./UpdateLessonUseCase";

class UpdateLessonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, date_lesson, module_id } = request.body;

    const updateLessonUseCase = container.resolve(UpdateLessonUseCase);

    const lesson = await updateLessonUseCase.execute({
      id,
      name,
      date_lesson,
      module_id,
    });

    return response.status(200).json(lesson);
  }
}

export { UpdateLessonController };
