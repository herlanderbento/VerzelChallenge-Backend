import { v4 as uuidV4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
