import {Router} from "express"
import {AuthorController} from "./controllers/AuthorController";
import {PostController} from "./controllers/PostController";

const routes = Router()

const authorController = new AuthorController()
routes.get("/authors", authorController.findall)
routes.post("/author", authorController.create)
routes.delete("/author/:id", authorController.delete)

const postController = new PostController()
routes.get("/posts", postController.findAll)
routes.get("/author/:id/posts", postController.findByAuthor)
routes.post("/author/:id/post", postController.create)
routes.delete("/post/:id", postController.delete)
routes.post("/post/:id/like", postController.like)

export default routes
