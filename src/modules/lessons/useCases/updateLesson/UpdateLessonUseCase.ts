import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Lesson } from "../../entities/Lesson";
import { ILessonsRepository } from "../../repositories/ILessonsRepository";

interface IRequest {
  id: string;
  name: string;
  date_lesson: Date;
  module_id: string;
}

@injectable()
class UpdateLessonUseCase {
  constructor(
    @inject("LessonsRepository")
    private lessonsRepository: ILessonsRepository
  ) {}

  async execute({
    id,
    name,
    date_lesson,
    module_id,
  }: IRequest): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError("Lesson not found.");
    }

    if (name !== lesson.name) {
      const lessonAlreadyExists = await this.lessonsRepository.findByName(name);

      if (lessonAlreadyExists) {
        throw new AppError("Lesson already exists!");
      }
    }

    Object.assign(lesson, {
      name,
      date_lesson,
      module_id,
      updated_at: new Date(),
    });

    await this.lessonsRepository.save(lesson);

    return lesson;
  }
}

export { UpdateLessonUseCase };
