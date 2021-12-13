import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ILessonsRepository } from "../../repositories/ILessonsRepository";

@injectable()
class DeleteLessonUseCase {
  constructor(
    @inject("LessonsRepository")
    private lessonsRepository: ILessonsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError("Lesson not found.");
    }

    await this.lessonsRepository.delete(id);
  }
}

export { DeleteLessonUseCase };
