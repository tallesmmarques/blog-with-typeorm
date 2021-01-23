import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Post} from "./Post";
import {Commentary} from "./Commentary";

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

  @OneToMany(() => Post, post => post.author)
  posts: Post[]

  @OneToMany(() => Commentary, commentary => commentary.author)
  comments: Commentary[]
}
