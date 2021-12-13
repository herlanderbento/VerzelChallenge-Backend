import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLessonsUseCase } from "./ListLessonsUseCase";

class ListLessonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLessonsUseCase = container.resolve(ListLessonsUseCase);

    const list = await listLessonsUseCase.execute();

    const all = Object.assign([...list, { total: list.length }]);

    return response.json(all);
  }
}

export { ListLessonsController };
