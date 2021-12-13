import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Module } from "../../entities/Module";
import { IModulesRepository } from "../../repositories/IModulesRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateModuleUseCase {
  constructor(
    @inject("ModulesRepository")
    private modulesRepository: IModulesRepository
  ) {}

  async execute({ id, name, description }: IRequest): Promise<Module> {
    const modules = await this.modulesRepository.findById(id);

    if (!modules) {
      throw new AppError("Module not found!", 404);
    }

    if (name !== modules.name) {
      const moduleAlreadyExists = await this.modulesRepository.findByName(name);

      if (moduleAlreadyExists) {
        throw new AppError("Module already exists!", 400);
      }
    }

    Object.assign(modules, {
      name,
      description,
      updated_at: new Date(),
    });

    await this.modulesRepository.save(modules);

    return modules;
  }
}

export { UpdateModuleUseCase };
