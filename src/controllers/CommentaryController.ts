import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Commentary} from "../entity/Commentary";
import {Author} from "../entity/Author";
import {Post} from "../entity/Post";

export class CommentaryController {
  async create(req: Request, res: Response) {
    let commentary: Commentary = req.body
    const {id} = req.params
    const {authorId} = req.query

    const commentaryRepository = getRepository(Commentary)
    const authorRepository = getRepository(Author)
    const postRepository = getRepository(Post)

    const author = authorRepository.findOneOrFail(Number(authorId))
    const post = postRepository.findOneOrFail(id)
    commentary.author
    commentary.post
    const createdCommentary = await commentaryRepository.save(commentary)

    return res.json(createdCommentary)
  }

  async findByPost(req: Request, res: Response) {
    const {id} = req.params

    const commentaryRepository = getRepository(Commentary)
    const postRepository = getRepository(Post)

    const post = await postRepository.findOneOrFail(id, {relations: ["commentarys"]})
    return res.json(post)
  }
}
