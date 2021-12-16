import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./listUsersUseCase";
import { classToPlain } from "class-transformer";

class ListUsersUseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const all = await listUsersUseCase.execute();

    return response.json(classToPlain(all));
  }
}

export { ListUsersUseController };
