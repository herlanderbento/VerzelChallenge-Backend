import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Lesson } from "../../lessons/entities/Lesson";

@Entity("modules", {
  orderBy: {
    name: "ASC",
  },
})
class Module {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @OneToMany((type) => Lesson, (lessons) => lessons.module)
  @JoinTable()
  lesson: Lesson[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Module };
