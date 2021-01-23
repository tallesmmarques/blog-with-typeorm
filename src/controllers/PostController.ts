import {Request, Response} from "express";
import {Post} from "../entity/Post";
import {getRepository} from "typeorm";
import {Author} from "../entity/Author";

export class PostController {
  async findAll(_req: Request, res: Response) {
    const postRepository = getRepository(Post)
    const posts = await postRepository.find({relations: ["author"]})

    return res.json(posts)
  }

  async findByAuthor(_req: Request, res: Response) {
    // const postRepository = getRepository(Post)
    const authorRepository = getRepository(Author)
    const author = await authorRepository.find({relations: ["posts"]})

    return res.json(author)
  }

  async create(req: Request, res: Response) {
    let post: Post = req.body
    const {id} = req.params

    const authorRepository = getRepository(Author)
    const postRepository = getRepository(Post)

    const author: Author = await authorRepository.findOneOrFail(id)
    post.author = author
    const createdPost = await postRepository.save(post)

    return res.json(createdPost)
  }

  async delete(req: Request, res: Response) {
    const {id} = req.params
    const postRepository = getRepository(Post)

    await postRepository.findOneOrFail(id).catch(err => {
      console.log(err)
      return res.json({error: "This post not exist"})
    })

    await postRepository.delete(id)
    return res.json({message: "Post deleted"})
  }

  async like(req: Request, res: Response) {
    const {id} = req.params
    const dislike: boolean = (req.query.dislike === "true")
    
    const postRepository = getRepository(Post)

    let post = await postRepository.findOneOrFail(id)
    dislike ? post.likes-- : post.likes++
    await postRepository.save(post)

    return res.json({likes: post.likes})
  }
}
