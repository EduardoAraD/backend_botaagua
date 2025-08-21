import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { NewsController } from "../../../controllers/NewsController";

const newsController = new NewsController()
export const NewsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/news', { schema: {} }, newsController.getAll)

  app.get('/news/:id', { schema:{} }, newsController.getById)
}
