import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
class DeleteModuleUseCase {
  constructor(
    @inject("ModulesRepository")
    private modulesRepository: IModulesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const modules = await this.modulesRepository.findById(id);

    if (!modules) {
      throw new AppError("Module not found", 404);
    }

    await this.modulesRepository.delete(id);
  }
}

export { DeleteModuleUseCase };
