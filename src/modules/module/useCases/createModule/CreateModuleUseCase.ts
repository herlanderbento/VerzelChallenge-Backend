import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IModulesRepository } from "../../repositories/IModulesRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateModuleUseCase {
  constructor(
    @inject("ModulesRepository")
    private modulesRepository: IModulesRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const moduleAlreadyExists = await this.modulesRepository.findByName(name);

    if (moduleAlreadyExists) {
      throw new AppError("Module already exists!", 400);
    }

    this.modulesRepository.create({
      name,
    });
  }
}

export { CreateModuleUseCase };
