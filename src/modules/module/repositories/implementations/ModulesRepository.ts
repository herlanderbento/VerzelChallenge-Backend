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
    const list = await this.repository
      .createQueryBuilder("modules")
      .loadRelationCountAndMap("modules.lessonCount", "modules.lesson")
      .getMany();

    return list;
  }

  async listAllRelationsAndCount(): Promise<Module[]> {
    // const list = await this.repository
    //   .createQueryBuilder("modules")
    //   .innerJoinAndSelect("modules.lesson", "lesson")
    //   .loadRelationCountAndMap("modules.lessonCount", "modules.lesson")
    //   .orderBy("lesson.name", "ASC")
    //   .getMany();

    // return list;

    const list = await this.repository.find({
      relations: ["lesson"],
      order: {
        name: "ASC",
      },
    });

    return list;
  }

  async findByName(name: string): Promise<Module> {
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
