import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListModulesUseCases } from "./ListModulesUseCases";

class ListModulesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listModulesUseCases = container.resolve(ListModulesUseCases);

    const list = await listModulesUseCases.execute();

    const all = Object.assign([...list, { total: list.length }]);

    return response.json(all);
  }
}

export { ListModulesController };
