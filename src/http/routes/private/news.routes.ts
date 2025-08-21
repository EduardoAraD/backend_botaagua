import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { NewsController } from "../../../controllers/NewsController";

const newsController = new NewsController();
export const NewsRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/news', { schema: {} }, newsController.create)

  app.put('/news/:id', { schema: {} }, newsController.update)

  app.delete('/news/:id', { schema: {} }, newsController.delete)
}
