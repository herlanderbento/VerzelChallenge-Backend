import { inject, injectable } from "tsyringe";
import { Module } from "../../entities/Module";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
class ListModulesJoinLessonUseCases {
  constructor(
    @inject("ModulesRepository")
    private modulesRepository: IModulesRepository
  ) {}
  async execute(): Promise<Module[]> {
    const list = await this.modulesRepository.listAllRelationsAndCount();

    return list;
  }
}

export { ListModulesJoinLessonUseCases };
