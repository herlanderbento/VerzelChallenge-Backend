import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLessonUseCase } from "./CreateLessonUseCase";

class CreateLessonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, date_lesson, module_id } = request.body;

    const createLessonUseCase = container.resolve(CreateLessonUseCase);

    await createLessonUseCase.execute({
      name,
      date_lesson,
      module_id,
    });

    return response.status(201).send();
  }
}

export { CreateLessonController };
