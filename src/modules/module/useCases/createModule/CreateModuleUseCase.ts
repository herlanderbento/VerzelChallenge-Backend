import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IModulesRepository } from "../../repositories/IModulesRepository";
import * as Yup from "yup";

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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid({ name }))) {
      throw new AppError("Validation fails");
    }

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
