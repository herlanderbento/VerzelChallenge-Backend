import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

import { IModulesRepository } from "../../modules/module/repositories/IModulesRepository";
import { ModulesRepository } from "../../modules/module/repositories/implementations/ModulesRepository";

import { ILessonsRepository } from "../../modules/lessons/repositories/ILessonsRepository";
import { LessonsRepository } from "../../modules/lessons/repositories/implementations/LessonsRepository";

container.registerSingleton<IModulesRepository>(
  "ModulesRepository",
  ModulesRepository
);

container.registerSingleton<ILessonsRepository>(
  "LessonsRepository",
  LessonsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
