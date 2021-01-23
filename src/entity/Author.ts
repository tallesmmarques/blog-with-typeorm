import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column("date")
  birthday: Date;
}
