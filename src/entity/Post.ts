import {Author} from "./Author";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Commentary} from "./Commentary";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text")
  content: string;

  @Column({
    nullable: true,
    default: 0
  })
  likes: number;

  @ManyToOne(() => Author, author => author.posts)
  author: Author;

  @OneToMany(() => Commentary, commentary => commentary.post)
  commentarys: Commentary[]
}
