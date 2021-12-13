import { inject, injectable } from "tsyringe";
import { Lesson } from "../../entities/Lesson";
import { ILessonsRepository } from "../../repositories/ILessonsRepository";

@injectable()
class ListLessonsUseCase {
  constructor(
    @inject("LessonsRepository")
    private lessonsRepository: ILessonsRepository
  ) {}

  async execute(): Promise<Lesson[]> {
    const list = await this.lessonsRepository.list();

    return list;
  }
}

export { ListLessonsUseCase };
