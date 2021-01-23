import {Request, Response} from "express"
import {getRepository} from "typeorm";
import {Author} from "../entity/Author";

export class AuthorController {
  async findall(_req: Request, res: Response) {
    const authorRepository = getRepository(Author)
    const authors = await authorRepository.find()

    return res.json(authors)
  }

  async create(req: Request, res: Response) {
    const authorRepository = getRepository(Author)
    const author: Author = req.body

    const authorSaved = await authorRepository.save(author)
    return res.json(authorSaved)
  }

  async delete(req: Request, res: Response) {
    const {id} = req.params
    const authorRepository = getRepository(Author)

    await authorRepository.findOneOrFail(id).catch(err => {
      console.log(err)
      return res.json({error: "This author not exist"})
    })

    await authorRepository.delete(id)
    return res.json({message: "Author deleted"})
  }
}
