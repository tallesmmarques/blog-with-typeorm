import "reflect-metadata";
import {createConnection} from "typeorm";
import {Author} from "./entity/Author";
import express from "express"
import routes from "./routes";
import {Commentary} from "./entity/Commentary";
import {Post} from "./entity/Post";

createConnection({
  "type": "sqlite",
  "database": "database.sqlite",
  "synchronize": true,
  "logging": false,
  "entities": [
    Author,
    Post,
    Commentary
  ]
}).then(() => {
  const app = express();
  app.use(express.json())
  app.use(routes)

  app.listen(3333, () => console.log("Server is running in http://localhost:3333"))
}).catch(error => console.log(error));
