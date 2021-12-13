import { getRepository, Repository } from "typeorm";
import { Lesson } from "../../entities/Lesson";
import { ICreateLessonDTO, ILessonsRepository } from "../ILessonsRepository";

class LessonsRepository implements ILessonsRepository {
  private repository: Repository<Lesson>;

  constructor() {
    this.repository = getRepository(Lesson);
  }

  async create({
    name,
    date_lesson,
    module_id,
  }: ICreateLessonDTO): Promise<void> {
    const lesson = this.repository.create({
      name,
      date_lesson,
      module_id,
    });

    await this.repository.save(lesson);
  }

  async list(): Promise<Lesson[]> {
    const lesson = await this.repository.find({
      relations: ["module"],
    });

    return lesson;
  }

  async findByName(name: string): Promise<Lesson> {
    const lesson = await this.repository.findOne({ name });

    return lesson;
  }

  async findById(id: string): Promise<Lesson> {
    const lesson = await this.repository.findOne({ id });

    return lesson;
  }

  async findAllOfModule(module_id: string): Promise<Lesson[]> {
    const lesson = await this.repository.find({
      relations: ["module"],
      where: { module_id: module_id },
      order: {
        name: "ASC",
      },
    });

    return lesson;
  }

  async save(lesson: Lesson): Promise<Lesson> {
    const lessons = await this.repository.save(lesson);

    return lessons;
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { LessonsRepository };
