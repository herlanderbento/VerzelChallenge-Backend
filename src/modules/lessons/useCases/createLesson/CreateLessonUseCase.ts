import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import {
  ICreateLessonDTO,
  ILessonsRepository,
} from "../../repositories/ILessonsRepository";

@injectable()
class CreateLessonUseCase {
  constructor(
    @inject("LessonsRepository")
    private lessonsRepository: ILessonsRepository
  ) {}

  async execute({
    name,
    date_lesson,
    module_id,
  }: ICreateLessonDTO): Promise<void> {
    const lessonAlreadyExits = await this.lessonsRepository.findByName(name);

    if (lessonAlreadyExits) {
      throw new AppError("Lesson already exists");
    }

    await this.lessonsRepository.create({
      name,
      date_lesson,
      module_id,
    });
  }
}

export { CreateLessonUseCase };
