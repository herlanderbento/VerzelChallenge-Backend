import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import {
  ICreateLessonDTO,
  ILessonsRepository,
} from "../../repositories/ILessonsRepository";
import * as Yup from "yup";

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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      date_lesson: Yup.date().required(),
      module_id: Yup.string().required(),
    });

    if (!(await schema.isValid({ name, date_lesson, module_id }))) {
      throw new AppError("Validation fails");
    }

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
