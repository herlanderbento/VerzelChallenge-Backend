import { inject, injectable } from "tsyringe";
import { Lesson } from "../../entities/Lesson";
import { ILessonsRepository } from "../../repositories/ILessonsRepository";

@injectable()
class ListLessonOfModuleUseCase {
  constructor(
    @inject("LessonsRepository")
    private lessonsRepository: ILessonsRepository
  ) {}

  async execute(module_id: string): Promise<Lesson[]> {
    const list = await this.lessonsRepository.findAllOfModule(module_id);
    return list;
  }
}

export { ListLessonOfModuleUseCase };
