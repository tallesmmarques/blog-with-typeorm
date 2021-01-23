import {Request, Response, Router} from "express"
import {AuthorController} from "./controllers/AuthorController";

const routes = Router()

routes.get("/", (_, res: Response) => res.json({data: "bom dia"}))

const authorController = new AuthorController()
routes.get("/author", authorController.findall)
routes.post("/author", authorController.create)
routes.delete("/author/:id", authorController.delete)

export default routes
