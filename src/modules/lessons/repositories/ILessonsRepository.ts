import { Module } from "../../module/entities/Module";
import { Lesson } from "../entities/Lesson";

interface ICreateLessonDTO {
  name: string;
  date_lesson: Date;
  module_id: string;
}

interface ILessonsRepository {
  findByName(name: string): Promise<Lesson>;
  findByIdModule(id: string): Promise<Module>;
  findById(id: string): Promise<Lesson>;
  findAllOfModule(module_id: string): Promise<Lesson[]>;
  create({ name, date_lesson, module_id }: ICreateLessonDTO): Promise<void>;
  list(): Promise<Lesson[]>;
  save(lesson: Lesson): Promise<Lesson>;
  delete(id: string): Promise<void>;
}

export { ILessonsRepository, ICreateLessonDTO };
