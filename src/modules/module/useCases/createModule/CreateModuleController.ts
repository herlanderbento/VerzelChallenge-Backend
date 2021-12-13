import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateModuleUseCase } from "./CreateModuleUseCase";

class CreateModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createModuleUseCases = container.resolve(CreateModuleUseCase);

    await createModuleUseCases.execute({ name });

    return response.status(201).send();
  }
}

export { CreateModuleController };
