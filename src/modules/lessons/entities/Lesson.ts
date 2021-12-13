import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Module } from "../../module/entities/Module";

@Entity("lessons")
class Lesson {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  date_lesson: Date;

  @Column()
  module_id: string;

  @ManyToOne(() => Module)
  @JoinColumn({ name: "module_id" })
  module: Module[];

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

export { Lesson };
