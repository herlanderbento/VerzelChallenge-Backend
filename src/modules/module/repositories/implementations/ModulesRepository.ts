import { getRepository, Repository } from "typeorm";
import { Module } from "../../entities/Module";
import { IModulesRepository, ICreateModuleDTO } from "../IModulesRepository";

class ModulesRepository implements IModulesRepository {
  private repository: Repository<Module>;

  constructor() {
    this.repository = getRepository(Module);
  }

  async create({ name }: ICreateModuleDTO): Promise<void> {
    const modules = this.repository.create({
      name,
    });

    await this.repository.save(modules);
  }

  async list(): Promise<Module[]> {
    const modules = await this.repository.find({
      order: {
        name: "ASC",
      },
    });

    return modules;
  }

  async findByName(name: string): Promise<Module> {
    // Select * from module where name = "name" limit 1
    const modules = await this.repository.findOne({ name });

    return modules;
  }

  async findById(id: string): Promise<Module> {
    const modules = await this.repository.findOne({ id });

    return modules;
  }

  async save(module: Module): Promise<Module> {
    const modules = await this.repository.save(module);

    return modules;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ModulesRepository };
