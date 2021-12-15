import { Module } from "../entities/Module";

interface ICreateModuleDTO {
  name: string;
}

interface IModulesRepository {
  findByName(name: string): Promise<Module>;
  findById(id: string): Promise<Module>;
  list(): Promise<Module[]>;
  listAllRelationsAndCount(): Promise<Module[]>;
  create({ name }: ICreateModuleDTO): Promise<void>;
  save(module: Module): Promise<Module>;
  delete(id: string): Promise<void>;
}

export { IModulesRepository, ICreateModuleDTO };
