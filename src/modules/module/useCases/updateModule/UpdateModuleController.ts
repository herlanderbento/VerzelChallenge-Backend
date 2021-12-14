import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateModuleUseCase } from "./UpdateModuleUseCase";

class UpdateModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateModuleUseCase = container.resolve(UpdateModuleUseCase);

    const modules = await updateModuleUseCase.execute({
      id,
      name,
    });

    return response.status(200).json(modules);
  }
}

export { UpdateModuleController };
