import {Author} from "./Author";
import {Post} from "./Post";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Commentary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;

  @ManyToOne(() => Author, author => author.comments)
  author: Author;

  @ManyToOne(() => Post, post => post.commentarys)
  post: Post;
}
